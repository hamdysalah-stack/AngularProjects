import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.html',
  styleUrl: './server.scss',
})
export class Server implements OnInit, OnChanges {
  @Input() ele!: { type: string; name: string; content: string };
  @Input() name!: string;
  serverID: number = 20;
  serverstatus: string = 'ONLINE  ';
  allowedaddserver: boolean = false;
  serverCreationstatus: string = 'no server was created';
  servername: string = 'test server';
  iserverCreated: boolean = false;

  backgroundColor: string = 'red';
  hasssuccess: boolean = true;
  hasError: boolean = true;
  hasSpcial: boolean = true;

  Arrayserver: string[] = ['test server 1', 'test server 2'];

  serverClass = {
    success: this.hasssuccess,
    special: this.hasSpcial,
    danger: this.hasError,
  };
  serverStyle = {
    'background-color': this.backgroundColor == 'green' ? 'green' : 'blue',
    color: 'white',
    'font-style': 'italic',
  };

  constructor() {
    // setTimeout(()=>{
    //   console.log(this.allowedaddserver);
    //     this.allowedaddserver=true
    //     console.log(this.allowedaddserver)
    // },3000)
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    console.log('ngonit  called');
  }

  getserverStatus() {
    return this.serverstatus;
  }

  OncreatedServer() {
    this.Arrayserver.push(this.servername);
    this.iserverCreated = true;
    this.serverCreationstatus = 'server created successfully';
  }
}
