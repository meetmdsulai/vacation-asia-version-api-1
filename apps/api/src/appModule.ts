import { Module } from '@nestjs/common';
import { HealthModule } from './health/healthModule';
@Module({ imports: [HealthModule] })
export class AppModule {}
