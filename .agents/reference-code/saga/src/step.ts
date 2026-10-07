import type { SagaExecutionContext, StepOptions } from './types';
export type SagaAction<T> = (params: T, ctx: SagaExecutionContext) => Promise<void> | void;
export class Step<T> {
  invocation?: SagaAction<T>; compensation?: SagaAction<T>;
  constructor(public readonly name: string, public readonly options: StepOptions = {}) {}
  setInvocation(fn: SagaAction<T>) { this.invocation = fn; }
  setCompensation(fn: SagaAction<T>) { this.compensation = fn; }
}
