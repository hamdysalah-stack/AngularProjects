import { Component, ElementRef, EventEmitter, Output, output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-core',
  standalone: false,
  templateUrl: './core.html',
  styleUrl: './core.scss',
})
export class Core {

@Output() servercreated = new EventEmitter<{servername:string,serverContent:string}>;

  @Output() blueprintcreated = new EventEmitter<{servername:string,serverContent:string}>;


@ViewChild('servercontentinput', { static: true }) 
servercontent!: ElementRef;

  newServerName="";
  newServerContent="";
  // onAddServer(){
  onAddServer(servernameinput:HTMLInputElement){
    //  this.servercreated.emit({servername:this.newServerName , serverContent :this.newServerContent})
     this.servercreated.emit({servername:servernameinput.value , serverContent :this.newServerContent})
  } 
    onAddblueprint(){
      // this.blueprintcreated.emit({servername:this.newServerName , serverContent :this.newServerContent})
      this.blueprintcreated.emit({servername:this.newServerName , serverContent :this.servercontent.nativeElement.value})
    } 
    }
  
