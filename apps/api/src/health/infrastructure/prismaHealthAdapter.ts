import type { OnModuleDestroy } from '@nestjs/common';
import { createPrismaClient, type PrismaClient } from '@vacation_asia/database';
import type { DatabaseHealthPort } from '../application/databaseHealthPort';
export class PrismaHealthAdapter implements DatabaseHealthPort, OnModuleDestroy {
  private readonly client: PrismaClient;
  constructor(databaseUrl: string) {
    this.client = createPrismaClient(databaseUrl);
  }
  async ping(): Promise<void> {
    await this.client.$queryRaw`SELECT 1`;
  }
  async onModuleDestroy(): Promise<void> {
    await this.client.$disconnect();
  }
}
