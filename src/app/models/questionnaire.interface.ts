import {Person} from "./person.interface";
import {Questions} from "./questions.interface";

export interface Questionnaire {
  person: Person;
  questions: Questions;
}

