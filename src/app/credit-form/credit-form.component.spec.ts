import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { cardStub } from 'src/testing/card-stub';
import { CreditDirective } from '../directives/credit.directive';

import { CreditFormComponent } from './credit-form.component';


describe('CreditFormComponent', () => {
  let component: CreditFormComponent;
  let fixture: ComponentFixture<CreditFormComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditFormComponent, CreditDirective],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditFormComponent);
    component = fixture.componentInstance;

    component.cardForm.setValue({
      cardNumber: cardStub.number,
      cardHolder: cardStub.holder,
      year: '2022',
      month: '9',
      cvv: cardStub.cvv
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain tags', () => {
    element = fixture.nativeElement;
    expect(element.innerHTML).toContain('form');
    expect(element.innerHTML).toContain('input');
    expect(element.innerHTML).toContain('select');
  });

  it('should contain "Card Number"', () => {
    element = fixture.nativeElement.querySelector('label');
    expect(element.textContent).toContain('Card Number');
  });

  it('should contain "Card Holder"', () => {
    element = fixture.nativeElement.querySelectorAll('label')[1];
    expect(element.textContent).toContain('Card Holder');
  });

  it('should contain "Month"', () => {
    element = fixture.nativeElement.querySelectorAll('label')[2];
    expect(element.textContent).toContain('Month');
  });

  it('should contain "Year"', () => {
    element = fixture.nativeElement.querySelectorAll('label')[3];
    expect(element.textContent).toContain('Year');
  });

  it('should contain "CVV"', () => {
    element = fixture.nativeElement.querySelectorAll('label')[4];
    expect(element.textContent).toContain('CVV');
  });

  it('should contain "Submit"', () => {
    element = fixture.nativeElement.querySelector('button');
    expect(element.textContent).toContain('Submit');
  });

  it('should call submit()', () => {
    spyOn(component, 'submit');
    element = fixture.nativeElement.querySelector('button');
    element.click();

    expect(component.submit).toHaveBeenCalledTimes(1);
  });

  it('should call onReverse()', () => {
    spyOn(component, 'onReverse');
    element = fixture.nativeElement.querySelectorAll('input')[2];
    element.click();

    expect(component.onReverse).toHaveBeenCalledTimes(1);
  });

  it('cardForm should contain cardNumber, cardHolder, year, month, cvv controls', () => {
    expect(component.cardForm.contains('cardNumber')).toBeTrue();
    expect(component.cardForm.contains('cardHolder')).toBeTrue();
    expect(component.cardForm.contains('year')).toBeTrue();
    expect(component.cardForm.contains('month')).toBeTrue();
    expect(component.cardForm.contains('cvv')).toBeTrue();
  });

  it('months length should 12', () => {
    expect(component.months.length).toBe(12);
  });

  it('years length should 10', () => {
    expect(component.years.length).toBe(10);
  });

  it('should call cardValueChange emit()', () => {
    spyOn(component.cardValueChange, 'emit');
    component.cardForm.patchValue({ cardNumber: '1111 1111 1111 1111' });

    component.ngOnInit();
    expect(component.cardValueChange.emit).toHaveBeenCalledTimes(1);
  });

  it('onReverse() should call isReversedChange emit(true)', fakeAsync(() => {
    spyOn(component.isReversedChange, 'emit');

    component.onReverse();
    tick(300);
    expect(component.isReversedChange.emit).toHaveBeenCalledWith(true);
  }));

  it('onReverseBack() should call isReversedChange emit(false)', fakeAsync(() => {
    spyOn(component.isReversedChange, 'emit');

    component.onReverseBack();
    tick(300);
    expect(component.isReversedChange.emit).toHaveBeenCalledWith(false);
  }));
});
