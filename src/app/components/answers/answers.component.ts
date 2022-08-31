import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {Questionnaire} from "../../models/questionnaire.interface";
import {PriceRange} from "../../enums/price-range.enum";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit, OnDestroy {

  private unsubscribe = new EventEmitter<boolean>();
  private answers = new Array<Questionnaire>();
  public filter: string;

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.storeService.getAnswers()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(answers => this.answers = answers);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  public getAnswers(): Questionnaire[] {
    if (!!this.filter) {
      return this.answers.filter(answer =>
        answer.person?.name?.includes(this.filter) ||
        answer.person?.lastname?.includes(this.filter) ||
        answer.person?.pesel?.includes(this.filter))
    }
    return this.answers;
  }

  public formatDate(date: Date): string {
    return date ? date.toLocaleDateString() : '';
  }

  public translatePriceRange(priceRange: PriceRange): string {
    switch (priceRange) {
      case PriceRange.EXPENSIVE:
        return 'DROGO';
      case PriceRange.ACCEPTABLE:
        return 'AKCEPTOWALNE';
      case PriceRange.AVERAGE:
        return 'PRZECIĘTNY POZIOM';
      case PriceRange.CHEAP:
        return 'BARDZO TANIO';
      default:
        return '';
    }
  }
}
