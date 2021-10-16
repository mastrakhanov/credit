import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ICard } from '../interfaces';


@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditCardComponent implements OnInit {

  @Input() cardValue?: ICard;
  @Input() isReversed?: boolean;

  cardNumberItems: number[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 19; i++) {
      if (i === 4 || i === 9 || i === 14) {
        this.cardNumberItems.push(-1);
      } else {
        this.cardNumberItems.push(i);
      }
    }
  }

}
