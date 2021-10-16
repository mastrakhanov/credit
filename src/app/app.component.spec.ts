import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditFormComponent } from './credit-form/credit-form.component';

import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CreditCardComponent, CreditFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
