import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CreditDirective} from './directives/credit.directive';
import { CreditCardComponent} from './credit-card/credit-card.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    CreditFormComponent,
    CreditDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
