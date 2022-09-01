import {Component, EventEmitter, Output} from '@angular/core';
import {Questionnaire} from "../../models/questionnaire.interface";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {

  @Output() public addEvent = new EventEmitter<Questionnaire>();
  public questionnaire = <Questionnaire>{person: {}, questions: {}};

  constructor() {
  }

  public onAdd(): void {
    this.addEvent.emit({...this.questionnaire});
    this.clearQuestionnaire();
  }

  public getSatisfiedOptions(): any[] {
    return [
      {label: 'Tak', value: true},
      {label: 'Nie', value: false}
    ];
  }

  private clearQuestionnaire(): void {
    this.questionnaire = <Questionnaire>{person: {}, questions: {}};
  }
}
