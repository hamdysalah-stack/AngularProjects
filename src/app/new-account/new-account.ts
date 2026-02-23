import { Logging } from './../Services/logging';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  standalone: false,
  templateUrl: './new-account.html',
  styleUrl: './new-account.scss',
})
export class NewAccount {
  @Output() AccountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private loggingService: Logging) {}

  OnCreatedAccount(AccountName: string, AccountStatus: string) {
    this.AccountAdded.emit({
      name: AccountName,
      status: AccountStatus,
    });

    // console.log("A server Status changed and new statas is," ,AccountStatus);
    // const loggingService = new Logging();
    this.loggingService.LogStatusChanged(AccountStatus);
  }
}
