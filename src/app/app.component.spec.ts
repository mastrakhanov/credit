import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { CreditDirective } from './directives/credit.directive';

import { cardStub } from '../testing/card-stub';

import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CreditCardComponent,
        CreditFormComponent,
        CreditDirective
      ],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app-credit-card and app-credit-form', () => {
    element = fixture.nativeElement;
    expect(element.innerHTML).toContain('app-credit-card');
    expect(element.innerHTML).toContain('app-credit-form');
  });

  it('should isReserved to be true', () => {
    component.changeIsReversed(true);
    expect(component.isReversed).toBeTrue();
  });

  it('should cardValue to be cardStub', () => {
    component.changeCardValue(cardStub);
    expect(component.cardValue).toEqual(cardStub);
  });
});
