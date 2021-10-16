import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ICard } from '../interfaces';


@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditFormComponent implements OnInit, OnDestroy {

  @Output() cardValueChange = new EventEmitter<ICard>();
  @Output() isReversedChange = new EventEmitter<boolean>();

  cardForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(19), Validators.pattern('^[0-9 \s]*$')]),
    cardHolder: new FormControl('', [Validators.required, Validators.pattern('^[A-Z, a-z \s]*$')]),
    month: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    cvv: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  months: number[] = Array.from({ length: 12 }, (_, x) => x);
  years: number[] = Array.from({ length: 10 }, (_, x) => new Date().getFullYear() + x);

  private cardFormChanged?: Subscription;


  ngOnInit(): void {
    this.cardFormChanged = this.cardForm.valueChanges.subscribe(({ cardNumber, cardHolder, month, year, cvv }: any) => {
      const cardMonth = month.length === 1 ? '0' + month : month;
      const cardYear = year.slice(2);
      const cardValue: ICard = { number: cardNumber, holder: cardHolder, month: cardMonth, year: cardYear, cvv };

      this.cardValueChange.emit(cardValue);
    });
  }

  ngOnDestroy(): void {
    if (this.cardFormChanged) { this.cardFormChanged.unsubscribe(); }
  }

  submit(): void {
    console.log(this.cardForm);
  }

  onReverse(): void {
    setTimeout(() => {
      this.isReversedChange.emit(true);
    }, 300);
  }

  onReverseBack(): void {
    setTimeout(() => {
      this.isReversedChange.emit(false);
    }, 300);
  }

}
