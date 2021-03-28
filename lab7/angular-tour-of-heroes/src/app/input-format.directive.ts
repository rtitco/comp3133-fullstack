import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) 
  onBlur() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase()
  }
}
