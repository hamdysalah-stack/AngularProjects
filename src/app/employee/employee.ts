import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeServices } from '../Services/employee-services';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee implements OnInit {
  id: number;
  constructor(
    private _ActivateROute: ActivatedRoute,
    private EmployeeServices: EmployeeServices,
  ) {}
  ngOnInit(): void {
    this._ActivateROute.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  OnActivate() {
    // this.EmployeeServices.ActivatedEmitter.emit(true);
    this.EmployeeServices.ActivatedEmitter.next(true);
  }
}
