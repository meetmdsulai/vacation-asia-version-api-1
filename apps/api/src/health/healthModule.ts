import { Module } from '@nestjs/common';
import type { ApiEnvironment } from '@vacation_asia/config';
import { API_ENVIRONMENT, environmentProvider } from '../config/environment';
import { DATABASE_HEALTH_PORT, type DatabaseHealthPort } from './application/databaseHealthPort';
import { HealthService } from './application/healthService';
import { PrismaHealthAdapter } from './infrastructure/prismaHealthAdapter';
import { HealthController } from './presentation/healthController';
@Module({
  controllers: [HealthController],
  providers: [
    environmentProvider,
    {
      provide: DATABASE_HEALTH_PORT,
      inject: [API_ENVIRONMENT],
      useFactory: (environment: ApiEnvironment) => new PrismaHealthAdapter(environment.databaseUrl),
    },
    {
      provide: HealthService,
      inject: [DATABASE_HEALTH_PORT],
      useFactory: (databaseHealth: DatabaseHealthPort) => new HealthService(databaseHealth),
    },
  ],
})
export class HealthModule {}
