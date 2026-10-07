import type { HealthResponse, ReadinessResponse } from '@vacation_asia/contracts';
import type { DatabaseHealthPort } from './databaseHealthPort';
export class HealthService {
  constructor(private readonly databaseHealth: DatabaseHealthPort) {}
  getLiveness(): HealthResponse {
    return { status: 'ok' };
  }
  async getReadiness(): Promise<ReadinessResponse> {
    await this.databaseHealth.ping();
    return { status: 'ready' };
  }
}
