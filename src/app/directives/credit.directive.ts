import { Directive, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appCredit]'
})
export class CreditDirective {

  @Input() regexPattern = '';

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (['Delete', 'Backspace', 'Tab', 'Escape', 'Enter'].indexOf(event.key) !== -1 ||
      // Allow: Ctrl+A
      (event.key === 'a' && event.ctrlKey === true) ||
      // Allow: Ctrl+C
      (event.key === 'c' && event.ctrlKey === true) ||
      // Allow: Ctrl+V
      (event.key === 'v' && event.ctrlKey === true) ||
      // Allow: Ctrl+X
      (event.key === 'x' && event.ctrlKey === true) ||
      // Allow: left, right
      (event.key === 'ArrowLeft') || (event.key === 'ArrowRight')) {
      return;
    }

    const regEx = new RegExp(this.regexPattern);

    if (regEx.test(event.key)) {
      return;
    } else {
      event.preventDefault();
    }
  }

}
