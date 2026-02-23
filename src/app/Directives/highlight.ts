import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs:'high',
  standalone: false,
})
export class Highlight {

  @Input('hightlighted') ishighlightd=false;
  @Output() toggleHighlight= new EventEmitter();
  constructor() { 

    console.log("hoghtlightdirective")
  }
  // @HostBinding('className')
  // get cssClass(){
  //   return'hightlighted'
  // }
  @HostBinding('className.hightlighted')
  get cssClass(){
    return this.ishighlightd;
  }

  @HostListener('mouseover')
  mouseOver(){
    this.ishighlightd=true
    this.toggleHighlight.emit(this.ishighlightd)
  }
  @HostListener('mouseleave')
  mouseleave(){
    this.ishighlightd=false
        this.toggleHighlight.emit(this.ishighlightd)

  }

  toggle(){
    this.ishighlightd=!this.ishighlightd;
    this.toggleHighlight.emit(this.ishighlightd)
}


}
