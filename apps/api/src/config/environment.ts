import { parseApiEnvironment } from '@vacation_asia/config';
export const API_ENVIRONMENT = Symbol('API_ENVIRONMENT');
export const environmentProvider = {
  provide: API_ENVIRONMENT,
  useFactory: () => parseApiEnvironment(process.env),
};
