import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  standalone: false,
  templateUrl: './alert-component.html',
  styleUrl: './alert-component.scss',
})
export class AlertComponent {
  @Input() Message: string;
  @Output() close = new EventEmitter<void>();
  OnClose() {
    this.close.emit();
  }
}
