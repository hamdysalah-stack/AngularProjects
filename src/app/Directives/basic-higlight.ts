import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHiglight]',
  standalone: false,
})
export class BasicHiglight {

  @Input() deafultColor :string="lightgreen";
  @Input() HighlightColor:string="lightblue";

  @HostBinding('style.backgroundColor') backgroundColor:string=this.deafultColor;

  constructor(private element:ElementRef,private render:Renderer2) { 

    // this.element.nativeElement.style.backgroundColor="lightblue";
    // this.render.setStyle(this.element.nativeElement,"background-color","lightgray")
  }

    //  @HostListener('mouseenter',['$event']) mouseover(evenData:Event){
   @HostListener('mouseenter') mouseover(){
    // this.render.setStyle(this.element.nativeElement,"background-color","lightgray")
    this.backgroundColor=this.HighlightColor;
  }

     @HostListener('mouseleave') mouseLeave(){
    // this.render.setStyle(this.element.nativeElement,"background-color","lightblue")
    this.backgroundColor=this.deafultColor
  }
}
