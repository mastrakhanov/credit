import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cardStub } from 'src/testing/card-stub';

import { CreditCardComponent } from './credit-card.component';


describe('CreditCardComponent', () => {
  let component: CreditCardComponent;
  let fixture: ComponentFixture<CreditCardComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditCardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardComponent);
    component = fixture.componentInstance;
    component.cardValue = cardStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain img', () => {
    element = fixture.nativeElement;
    expect(element.innerHTML).toContain('img');
  });

  it('should contain card number', () => {
    element = fixture.nativeElement.querySelector('.card-item__number');
    expect(element.textContent).toContain('0000000000000000');
  });

  it('should contain "Card Holder"', () => {
    element = fixture.nativeElement.querySelector('.card-item__holder');
    expect(element.textContent).toContain('Card Holder');
  });

  it('should contain cardStub holder', () => {
    element = fixture.nativeElement.querySelector('.card-item__holderName');
    expect(element.textContent).toContain(cardStub.holder);
  });

  it('should contain "Expires"', () => {
    element = fixture.nativeElement.querySelector('.card-item__exp');
    expect(element.textContent).toContain('Expires');
  });

  it('should contain cardStub month and year', () => {
    element = fixture.nativeElement.querySelector('.card-item__monthYear');
    expect(element.textContent).toContain(cardStub.month, cardStub.year);
  });

  it('cardNumberItems length should be 19', () => {
    expect(component.cardNumberItems.length).toBe(19);
  });

  it('should be -1', () => {
    expect(component.cardNumberItems[4]).toBe(-1);
    expect(component.cardNumberItems[9]).toBe(-1);
    expect(component.cardNumberItems[14]).toBe(-1);
  });

  describe('Back side', () => {
    let component2: CreditCardComponent;
    let fixture2: ComponentFixture<CreditCardComponent>;
    let element2: HTMLElement;

    beforeEach(() => {
      fixture2 = TestBed.createComponent(CreditCardComponent);
      component2 = fixture2.componentInstance;
      component2.isReversed = true;
      component2.cardValue = cardStub;
      fixture2.detectChanges();
    });

    it('should contain img', () => {
      element2 = fixture2.nativeElement;
      expect(element2.innerHTML).toContain('img');
    });

    it('should contain "CVV"', () => {
      element2 = fixture2.nativeElement.querySelector('.card-itemLabel__cvv');
      expect(element2.textContent).toContain('CVV');
    });

    it('should contain cardStub cvv', () => {
      element2 = fixture2.nativeElement.querySelector('.card-item__cvv');
      expect(element2.textContent).toContain(cardStub.cvv);
    });
  });
});
