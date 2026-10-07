import type { Step } from './step';
export class Group<T> {
  readonly steps: Step<T>[] = [];
  constructor(public readonly name: string, public readonly parallel = false) {}
}
