import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServices {
  // ActivatedEmitter = new EventEmitter<boolean>();
  //using Subject
  ActivatedEmitter = new Subject<boolean>();
  constructor() {}
}
