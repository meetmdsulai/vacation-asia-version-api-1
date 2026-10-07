import { parseWebEnvironment } from '@vacation_asia/config';
export function register(): void {
  parseWebEnvironment(process.env);
}
