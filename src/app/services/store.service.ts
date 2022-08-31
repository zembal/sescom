import {Injectable} from "@angular/core";
import {Questionnaire} from "../models/questionnaire.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {initData} from "../mock/init.data";

@Injectable({providedIn: 'root'})
export class StoreService {

  private answers = new BehaviorSubject<Questionnaire[]>(initData());

  constructor() {
  }

  public addAnswer(answer: Questionnaire): void {
    this.answers.next([...this.answers.getValue(), answer]);
  }

  public getAnswers(): Observable<Questionnaire[]> {
    return this.answers.asObservable();
  }
}
