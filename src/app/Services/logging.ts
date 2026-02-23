import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logging {
  constructor() {}

  LogStatusChanged(status: string) {
    console.log('A server Status changed , new Status from services is :', status);
  }
}
