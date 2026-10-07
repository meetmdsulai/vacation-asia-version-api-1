export const DATABASE_HEALTH_PORT = Symbol('DATABASE_HEALTH_PORT');
// Transport-independent capability: no framework, database or wire protocol types.
export interface DatabaseHealthPort {
  ping(): Promise<void>;
}
