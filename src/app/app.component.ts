import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICard } from './interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  cardValue: ICard = {} as ICard;
  isReversed = false;

  changeCardValue(value: ICard): void {
    this.cardValue = value;
  }

  changeIsReversed(value: boolean): void {
    this.isReversed = value;
  }

}
