import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  cardForm: FormGroup;
  cardNumberOnl: [] = [];
  cardHoldersOnl: string;
  cardMonthOnl: number;
  cardYearOnl: number;
  cardCvvOnl: number;
  isReversed = false;

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(19), Validators.pattern('^[0-9 \s]*$')]),
      cardHolders: new FormControl('', [Validators.required, Validators.pattern('^[A-Z, a-z \s]*$')]),
      cardMonth: new FormControl('', Validators.required),
      cardYear: new FormControl('', Validators.required),
      cardCvv: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  submit(): void {
    console.log(this.cardForm);
  }

  onReverse(): void {
    setTimeout(() => {
      this.isReversed = true;
    }, 300);
  }

  onReverseBack(): void {
    setTimeout(() => {
      this.isReversed = false;
    }, 300);
  }
}
