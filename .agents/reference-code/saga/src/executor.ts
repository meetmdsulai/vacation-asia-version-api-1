import { Group } from './group'; import type { Step } from './step'; import type { SagaExecutionContext, SagaRecord, SagaStepRecord } from './types'; import type { SagaStore } from './store';
const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));
async function runWithPolicy<T>(step: Step<T>, params:T, ctx:SagaExecutionContext): Promise<number> {
  if (!step.invocation) return 0; const max = Math.max(1, step.options.retry?.maxAttempts ?? 1); let last:unknown;
  for (let attempt=1; attempt<=max; attempt++) { try {
    const task = Promise.resolve(step.invocation(params, ctx));
    if (step.options.timeoutMs) await Promise.race([task, new Promise((_,rej)=>setTimeout(()=>rej(new Error(`Step timeout: ${step.name}`)), step.options.timeoutMs))]); else await task;
    return attempt;
  } catch(e) { last=e; if(attempt<max) await sleep(step.options.retry?.backoffMs ?? 0); } }
  throw last;
}
export class SagaExecutor<T> {
  constructor(private readonly sagaType:string, private readonly items:Array<Step<T>|Group<T>>, private readonly store:SagaStore) {}
  async execute(params:T, ctx:SagaExecutionContext):Promise<void> {
    const records:SagaStepRecord[]=[]; const completed:Step<T>[]=[]; const now=new Date().toISOString();
    const saga:SagaRecord={sagaId:ctx.sagaId,correlationId:ctx.correlationId,sagaType:this.sagaType,state:'IN_PROGRESS',steps:records,createdAt:now,updatedAt:now}; await this.store.create(saga);
    const invokeOne=async(step:Step<T>)=>{ const rec:SagaStepRecord={name:step.name,status:'RUNNING',attempts:0}; records.push(rec); await this.persist(saga); try { rec.attempts=await runWithPolicy(step,params,ctx); rec.status='COMPLETED'; rec.completedAt=new Date().toISOString(); completed.push(step); await this.persist(saga); } catch(e){ rec.status='FAILED'; rec.error=String(e); await this.persist(saga); throw e; } };
    try { for(const item of this.items){ if(item instanceof Group){ if(item.parallel) await Promise.all(item.steps.map(invokeOne)); else for(const s of item.steps) await invokeOne(s); } else await invokeOne(item); } saga.state='COMPLETED'; await this.persist(saga); }
    catch(e){ saga.failureReason=String(e); saga.state='COMPENSATING'; await this.persist(saga); let compensationFailed=false;
      for(const step of [...completed].reverse()){ if(!step.compensation) continue; const rec=records.findLast(r=>r.name===step.name && r.status==='COMPLETED'); if(!rec) continue; rec.status='COMPENSATING'; await this.persist(saga); try{ await step.compensation(params,ctx); rec.status='COMPENSATED'; } catch(ce){ compensationFailed=true; rec.status='COMPENSATION_FAILED'; rec.error=String(ce); } await this.persist(saga); }
      saga.state=compensationFailed?'COMPENSATION_PARTIALLY_FAILED':'COMPENSATED'; await this.persist(saga); throw e;
    }
  }
  private async persist(saga:SagaRecord){ saga.updatedAt=new Date().toISOString(); await this.store.save(saga); }
}
