import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  el:ElementRef
  constructor(el:ElementRef) { 
    this.el=el
  }
  

  @HostBinding("style.backgroundColor")
  bgcolor="red"

  @HostListener("mouseenter")
  changeFontSize(){
    this.el.nativeElement.style.fontSize="50px"
  }

  @HostListener("mouseleave")
  resetFontSize(){
    this.el.nativeElement.style.fontSize="30px"
  }
}
