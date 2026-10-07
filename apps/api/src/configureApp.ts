import { ValidationPipe, type INestApplication } from '@nestjs/common';
import type { ApiEnvironment } from '@vacation_asia/config';
import helmet from 'helmet';
export function configureApp(app: INestApplication, environment: ApiEnvironment): void {
  app.use(helmet());
  app.enableCors({ origin: environment.webOrigin, credentials: false });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: false },
      validationError: { target: false, value: false },
    }),
  );
  app.enableShutdownHooks();
}
