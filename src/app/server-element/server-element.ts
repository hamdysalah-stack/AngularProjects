import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: false,
  templateUrl: './server-element.html',
  styleUrl: './server-element.scss',
})
export class ServerElement {
   @Input()ele!:{type:string,name:string,content:string}
}
