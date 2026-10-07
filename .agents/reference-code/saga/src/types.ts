export type SagaState =
  | 'NEW' | 'IN_PROGRESS' | 'COMPLETED' | 'COMPENSATING'
  | 'COMPENSATED' | 'FAILED' | 'COMPENSATION_PARTIALLY_FAILED';

export interface RetryPolicy { maxAttempts: number; backoffMs?: number; }
export interface StepOptions { timeoutMs?: number; retry?: RetryPolicy; }
export interface SagaExecutionContext {
  sagaId: string;
  correlationId: string;
  idempotencyKey: string;
  signal?: AbortSignal;
}
export interface SagaStepRecord {
  name: string;
  status: 'PENDING'|'RUNNING'|'COMPLETED'|'FAILED'|'COMPENSATING'|'COMPENSATED'|'COMPENSATION_FAILED';
  attempts: number;
  completedAt?: string;
  error?: string;
}
export interface SagaRecord {
  sagaId: string; correlationId: string; sagaType: string; state: SagaState;
  steps: SagaStepRecord[]; createdAt: string; updatedAt: string; failureReason?: string;
}
