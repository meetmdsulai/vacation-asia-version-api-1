import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { parseApiEnvironment } from '@vacation_asia/config';
import { AppModule } from './appModule';
import { configureApp } from './configureApp';
async function bootstrap(): Promise<void> {
  const environment = parseApiEnvironment(process.env);
  const app = await NestFactory.create(AppModule);
  configureApp(app, environment);
  await app.listen(environment.port, environment.host);
}
void bootstrap().catch(() => {
  Logger.error('API startup failed. Check configuration and service availability.', 'Bootstrap');
  process.exitCode = 1;
});
