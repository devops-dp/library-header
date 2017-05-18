import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lib-header]'
})
export class SampleDirective {

  constructor(private _elRef: ElementRef) {
    console.log(_elRef);
  }

}
