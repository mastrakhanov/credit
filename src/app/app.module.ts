import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CreditComponent} from './credit/credit.component';
import {NumberDirective} from './directives/number.directive';
import {StringDirective} from './directives/string.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreditComponent,
    NumberDirective,
    StringDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
