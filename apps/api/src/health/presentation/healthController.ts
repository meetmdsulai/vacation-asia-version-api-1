import { Controller, Get, Header, Inject, ServiceUnavailableException } from '@nestjs/common';
import type { HealthResponse, ReadinessResponse } from '@vacation_asia/contracts';
import { HealthService } from '../application/healthService';
@Controller('health')
export class HealthController {
  constructor(@Inject(HealthService) private readonly healthService: HealthService) {}
  @Get()
  @Header('Cache-Control', 'no-store')
  getLiveness(): HealthResponse {
    return this.healthService.getLiveness();
  }
  @Get('ready')
  @Header('Cache-Control', 'no-store')
  async getReadiness(): Promise<ReadinessResponse> {
    try {
      return await this.healthService.getReadiness();
    } catch {
      throw new ServiceUnavailableException({ status: 'unavailable' });
    }
  }
}
