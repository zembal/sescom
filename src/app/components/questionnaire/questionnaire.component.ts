import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Questionnaire} from "../../models/questionnaire.interface";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {

  @Output() public addEvent = new EventEmitter<Questionnaire>();
  @Output() public closeEvent = new EventEmitter<any>();

  public questionnaire = <Questionnaire>{person: {}, questions: {}};

  constructor() {
  }

  public onAdd(): void {
    this.addEvent.emit({...this.questionnaire});
    this.clearQuestionnaire();
  }

  public onClose(): void {
    this.closeEvent.emit();
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
