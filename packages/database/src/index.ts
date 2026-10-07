import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client';
export function createPrismaClient(databaseUrl: string): PrismaClient {
  const adapter = new PrismaPg({
    connectionString: databaseUrl,
    connectionTimeoutMillis: 3000,
    idleTimeoutMillis: 30000,
    max: 10,
    query_timeout: 3000,
    statement_timeout: 3000,
  });
  return new PrismaClient({ adapter, errorFormat: 'minimal' });
}
export type { PrismaClient } from './generated/prisma/client';
