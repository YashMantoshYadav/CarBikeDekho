import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('click', ['$event'])
  next() {
    const element = this.el.nativeElement.parentElement.children[1].children;
    
    // element.prepend(element[element.length-1])
    console.log(element)
  }
}
