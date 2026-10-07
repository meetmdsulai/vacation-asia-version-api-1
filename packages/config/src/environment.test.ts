import { describe, expect, it } from 'vitest';
import { parseApiEnvironment, parseWebEnvironment } from './index';

const validEnvironment = {
  DATABASE_URL: 'postgresql://test:test@localhost:5432/vacation_asia',
  WEB_ORIGIN: 'http://localhost:3000',
};

describe('environment validation', () => {
  it('maps external environment keys to camelCase with typed defaults', () => {
    expect(parseApiEnvironment(validEnvironment)).toMatchObject({
      port: 3001,
      nodeEnv: 'development',
    });
  });

  it.each(['0', '65536', '1.5', 'abc', ''])('rejects invalid port %s', (port) => {
    expect(() => parseApiEnvironment({ ...validEnvironment, API_PORT: port })).toThrow('API_PORT');
  });

  it('requires a database URL', () => {
    expect(() => parseApiEnvironment({ WEB_ORIGIN: validEnvironment.WEB_ORIGIN })).toThrow(
      'DATABASE_URL',
    );
  });

  it('rejects unsupported protocols without exposing secrets', () => {
    const input = { ...validEnvironment, DATABASE_URL: 'https://user:secret@localhost/db' };
    expect(() => parseApiEnvironment(input)).toThrow('Invalid environment variables: DATABASE_URL');
    expect(() => parseApiEnvironment(input)).not.toThrow('secret');
  });

  it.each(['*', 'http://localhost:3000/path', 'ftp://localhost', 'http://localhost:3000/'])(
    'rejects unsafe origin %s',
    (origin) => {
      expect(() => parseApiEnvironment({ ...validEnvironment, WEB_ORIGIN: origin })).toThrow(
        'WEB_ORIGIN',
      );
    },
  );

  it('validates optional infrastructure when configured', () => {
    expect(() =>
      parseApiEnvironment({ ...validEnvironment, REDIS_URL: 'http://localhost' }),
    ).toThrow('REDIS_URL');
    expect(() =>
      parseApiEnvironment({ ...validEnvironment, RABBITMQ_URL: 'http://localhost' }),
    ).toThrow('RABBITMQ_URL');
  });

  it('does not pass API secrets to web configuration', () => {
    expect(parseWebEnvironment({ ...validEnvironment, NODE_ENV: 'production' })).toEqual({
      nodeEnv: 'production',
    });
  });
});

it('sanitizes malformed connection strings instead of leaking URL parser errors', () => {
  expect(() =>
    parseApiEnvironment({ ...validEnvironment, DATABASE_URL: 'secret-invalid-url' }),
  ).toThrow('Invalid environment variables: DATABASE_URL');
});
