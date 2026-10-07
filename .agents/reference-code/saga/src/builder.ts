import { Group } from './group'; import { Step, type SagaAction } from './step'; import type { StepOptions } from './types';
export class SagaBuilder<T> {
  private currentStep?: Step<T>; private currentGroup?: Group<T>; private readonly items: Array<Step<T>|Group<T>> = [];
  step(name: string, options: StepOptions = {}) { this.currentStep = new Step<T>(name, options); (this.currentGroup?.steps ?? this.items).push(this.currentStep); return this; }
  invoke(fn: SagaAction<T>) { if (!this.currentStep) throw new Error('Call step() first'); this.currentStep.setInvocation(fn); return this; }
  withCompensation(fn: SagaAction<T>) { if (!this.currentStep) throw new Error('Call step() first'); this.currentStep.setCompensation(fn); return this; }
  startGroup(name: string, parallel = false) { if (this.currentGroup) throw new Error('Nested groups not supported'); this.currentGroup = new Group<T>(name, parallel); this.items.push(this.currentGroup); return this; }
  endGroup() { this.currentGroup = undefined; return this; }
  build() { return [...this.items]; }
}
