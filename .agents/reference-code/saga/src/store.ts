import type { SagaRecord } from './types';
export interface SagaStore {
  create(record: SagaRecord): Promise<void>;
  save(record: SagaRecord): Promise<void>;
  get(sagaId: string): Promise<SagaRecord | null>;
}
export class InMemorySagaStore implements SagaStore {
  private readonly data = new Map<string, SagaRecord>();
  async create(r: SagaRecord) { this.data.set(r.sagaId, structuredClone(r)); }
  async save(r: SagaRecord) { this.data.set(r.sagaId, structuredClone(r)); }
  async get(id: string) { const r = this.data.get(id); return r ? structuredClone(r) : null; }
}
