import { Logging } from './../Services/logging';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {
@Input() Account!:{name:string,status:string};
@Input() id!:number;
@Output() StatusChanged= new EventEmitter<{id:number,newStatus:string}>();
constructor(private loggingService :Logging ){
}

OsetTo(status:string){
  this.StatusChanged.emit({id:this.id,newStatus:status});
  // console.log("A server status changed , new Status:",status);
  // const loggingService = new Logging();
    this.loggingService.LogStatusChanged(status);
}
}
