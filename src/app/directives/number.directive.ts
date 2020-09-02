import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})

export class NumberDirective {

  regexNum = '^[0-9]*$';

  @Input() OnlyNumber: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = event;
    if (this.OnlyNumber) {
      if (['Delete', 'Backspace', 'Tab', 'Escape', 'Enter'].indexOf(e.key) !== -1 ||
        // Allow: Ctrl+A
        (e.key === 'a' && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.key === 'c' && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.key === 'x' && e.ctrlKey === true) ||
        // Allow: left, right
        (e.key === 'ArrowLeft') || (e.key === 'ArrowRight')) {
        // let it happen, don't do anything
        return;
      }

        const regEx =  new RegExp(this.regexNum);

        if(regEx.test(e.key))
          return;
        else
          e.preventDefault();
    }
  }
}
