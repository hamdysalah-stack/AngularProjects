import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterServices {
  private CounterSignals = signal(0);
  readonly counter = this.CounterSignals.asReadonly();

  increamnt() {
    if (this.counter() > 10) {
      throw 'Maxium value Reached';
    }
    this.CounterSignals.update((value) => value + 1);
  }
}
