import { z } from 'zod';

const nodeEnvironmentSchema = z.enum(['development', 'test', 'production']).default('development');
const httpOriginSchema = z
  .string()
  .url()
  .refine((value) => {
    const url = URL.parse(value);
    if (!url) return false;
    return ['http:', 'https:'].includes(url.protocol) && url.origin === value;
  }, 'Must be an HTTP(S) origin without a path');

function connectionUrlSchema(protocols: string[]) {
  return z
    .string()
    .url()
    .refine((value) => {
      const url = URL.parse(value);
      return url !== null && protocols.includes(url.protocol);
    });
}

const apiEnvironmentSchema = z.object({
  NODE_ENV: nodeEnvironmentSchema,
  API_HOST: z.string().min(1).default('127.0.0.1'),
  API_PORT: z.coerce.number().int().min(1).max(65535).default(3001),
  WEB_ORIGIN: httpOriginSchema,
  DATABASE_URL: connectionUrlSchema(['postgres:', 'postgresql:']),
  REDIS_URL: connectionUrlSchema(['redis:', 'rediss:']).optional(),
  RABBITMQ_URL: connectionUrlSchema(['amqp:', 'amqps:']).optional(),
});

const webEnvironmentSchema = z.object({
  NODE_ENV: nodeEnvironmentSchema,
});

function parseEnvironment<T>(schema: z.ZodType<T>, input: Record<string, unknown>): T {
  const result = schema.safeParse(input);
  if (!result.success) {
    const keys = [...new Set(result.error.issues.map((issue) => issue.path.join('.')))];
    // Never include rejected values: connection URLs may contain credentials.
    throw new Error(`Invalid environment variables: ${keys.join(', ')}`);
  }
  return result.data;
}

export function parseApiEnvironment(input: Record<string, unknown>) {
  const environment = parseEnvironment(apiEnvironmentSchema, input);
  return {
    nodeEnv: environment.NODE_ENV,
    host: environment.API_HOST,
    port: environment.API_PORT,
    webOrigin: environment.WEB_ORIGIN,
    databaseUrl: environment.DATABASE_URL,
    redisUrl: environment.REDIS_URL,
    rabbitmqUrl: environment.RABBITMQ_URL,
  };
}

export type ApiEnvironment = ReturnType<typeof parseApiEnvironment>;

export function parseWebEnvironment(input: Record<string, unknown>) {
  const environment = parseEnvironment(webEnvironmentSchema, input);
  return { nodeEnv: environment.NODE_ENV };
}
