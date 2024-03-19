import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[appPreviews]'
})
export class PreviewsDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('click', ['$event'])
  previews() {
    console.log(this.el.nativeElement.parentElement.children[1])
    const element = this.el.nativeElement.parentElement.children[1];
    console.log(element)
    let item = element.getElementsByClassName('box');
    // console.log(item[0])
    element.append(item[0])
    console.log(element)
  }
}
