import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {Questionnaire} from "../../models/questionnaire.interface";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  private answers = new Array<Questionnaire>();
  public filter: string;

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.storeService.getAnswers()
      .subscribe(answers => this.answers = answers)
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

}
