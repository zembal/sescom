import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {RatingModule} from 'primeng/rating';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {SelectButtonModule} from 'primeng/selectbutton';
import {QuestionnaireComponent} from './components/questionnaire/questionnaire.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AnswersComponent } from './components/answers/answers.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    AnswersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RadioButtonModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    RatingModule,
    CardModule,
    PanelModule,
    TableModule,
    CalendarModule,
    InputNumberModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
