import {Directive, HostListener, Input} from '@angular/core';

@Directive ({
  selector: '[OnlyString]'
})

export class StringDirective {

  regexStr = '^[A-Z, a-z]*$';

  @Input() OnlyString: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const ev = event;
    if (this.OnlyString) {
      if (['Delete', 'Backspace', 'Tab', 'Escape', 'Enter'].indexOf(ev.key) !== -1 ||
        // Allow: Ctrl+A
        (ev.key === 'a' && ev.ctrlKey === true) ||
        // Allow: Ctrl+C
        (ev.key === 'c' && ev.ctrlKey === true) ||
        // Allow: Ctrl+V
        (ev.key === 'v' && ev.ctrlKey === true) ||
        // Allow: Ctrl+X
        (ev.key === 'x' && ev.ctrlKey === true) ||
        // Allow: left, right
        (ev.key === 'ArrowLeft') || (ev.key === 'ArrowRight')) {
        // let it happen, don't do anything
        return;
      }
      const regStr =  new RegExp(this.regexStr);

      if(regStr.test(ev.key))
        return;
      else
        ev.preventDefault();
    }
  }
}
