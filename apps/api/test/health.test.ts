import 'reflect-metadata';
import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { parseApiEnvironment } from '@vacation_asia/config';
import request from 'supertest';
import type { Server } from 'node:http';
import { AppModule } from '../src/appModule';
import { configureApp } from '../src/configureApp';
import { API_ENVIRONMENT } from '../src/config/environment';
import { DATABASE_HEALTH_PORT } from '../src/health/application/databaseHealthPort';
describe('Health HTTP endpoints (ARCH-HYB-003, ARCH-HYB-005)', () => {
  let app: INestApplication<Server>;
  const ping = jest.fn<Promise<void>, []>();
  const environment = parseApiEnvironment({
    NODE_ENV: 'test',
    WEB_ORIGIN: 'http://localhost:3000',
    DATABASE_URL: 'postgresql://test:test@localhost:5432/vacation_asia',
  });
  beforeAll(async () => {
    const module = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(API_ENVIRONMENT)
      .useValue(environment)
      .overrideProvider(DATABASE_HEALTH_PORT)
      .useValue({ ping })
      .compile();
    app = module.createNestApplication<INestApplication<Server>>();
    configureApp(app, environment);
    await app.init();
  });
  beforeEach(() => ping.mockReset());
  afterAll(async () => {
    await app.close();
  });
  it('returns liveness without touching persistence', async () => {
    const response = await request(app.getHttpServer()).get('/health').expect(200);
    expect(response.body).toEqual({ status: 'ok' });
    expect(response.headers['cache-control']).toBe('no-store');
    expect(response.headers['x-content-type-options']).toBe('nosniff');
    expect(response.headers['x-powered-by']).toBeUndefined();
    expect(ping).not.toHaveBeenCalled();
  });
  it('checks the injected database port for readiness', async () => {
    ping.mockResolvedValue(undefined);
    const response = await request(app.getHttpServer()).get('/health/ready').expect(200);
    expect(response.body).toEqual({ status: 'ready' });
    expect(ping).toHaveBeenCalledTimes(1);
  });
  it('returns sanitized 503 when PostgreSQL is unavailable', async () => {
    ping.mockRejectedValue(new Error('postgresql://user:secret@internal/db'));
    const response = await request(app.getHttpServer()).get('/health/ready').expect(503);
    expect(response.body).toEqual({ status: 'unavailable' });
    expect(response.text).not.toContain('secret');
    await request(app.getHttpServer()).get('/health').expect(200);
  });
  it('does not authorize arbitrary browser origins', async () => {
    const response = await request(app.getHttpServer())
      .get('/health')
      .set('Origin', 'https://untrusted.example');
    expect(response.headers['access-control-allow-origin']).toBe(environment.webOrigin);
    expect(response.headers['access-control-allow-credentials']).toBeUndefined();
  });
  it('returns 404 for unknown routes', async () => {
    await request(app.getHttpServer()).get('/unknown').expect(404);
  });
});
