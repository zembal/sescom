import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {QuestionnaireComponent} from './questionnaire.component';
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "primeng/card";
import {InputMaskModule} from "primeng/inputmask";
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";
import {SelectButtonModule} from "primeng/selectbutton";
import {RatingModule} from "primeng/rating";
import {ButtonModule} from "primeng/button";

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;
  let html: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionnaireComponent],
      imports: [
        BrowserAnimationsModule,
        PanelModule,
        CardModule,
        InputMaskModule,
        CalendarModule,
        InputNumberModule,
        SelectButtonModule,
        RatingModule,
        ButtonModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render p-panel with title', () => {
    const panel = html.querySelector('p-panel');
    expect(panel).toBeDefined();

    const title = html.querySelector('span.p-panel-title')?.textContent;
    expect(title).toBe('Ankieta');
  })

  it('should render personal data card', () => {
    const card = html.querySelector('p-card');
    expect(card).toBeDefined();

    const title = card?.querySelector('div.p-card-subtitle')?.textContent;
    expect(title).toBe(' Dane Osobowe ');

    const inputs = card?.querySelectorAll('div.p-card-content input');
    const nameInputId = inputs?.item(0).getAttribute('id');
    expect(nameInputId).toBe('name');

    const lastnameInputId = inputs?.item(1).getAttribute('id');
    expect(lastnameInputId).toBe('lastname');

    const peselInputId = inputs?.item(2).getAttribute('id');
    expect(peselInputId).toBe('pesel');

    const mobileInputId = inputs?.item(3).getAttribute('id');
    expect(mobileInputId).toBe('mobile');

    const addressInputId = inputs?.item(4).getAttribute('id');
    expect(addressInputId).toBe('address');

    const cityInputId = inputs?.item(5).getAttribute('id');
    expect(cityInputId).toBe('city');

    const zipCodeInputId = inputs?.item(6).getAttribute('id');
    expect(zipCodeInputId).toBe('zipCode');
  })

  it('should render questions card', () => {
    const card = html.querySelectorAll('p-card')?.item(1);
    expect(card).toBeDefined();

    const title = card?.querySelector('div.p-card-subtitle')?.textContent;
    expect(title).toBe(' Pytania dotyczące produktów ');

    const questions = card?.querySelectorAll('div.p-card-content h4');
    expect(questions?.item(0).textContent).toBe('1. Data ostatniego spożycia produktów');
    expect(questions?.item(1).textContent).toBe('2. Jak często spożywa w tygodniu?');
    expect(questions?.item(2).textContent).toBe('3. Czy jest zadowolony ze smaku produktów?');
    expect(questions?.item(3).textContent).toBe('4. Co sądzi o obecnych cenach produktów (DROGO /' +
      ' AKCEPTOWALNE / PRZECIĘTNY POZIOM / BARDZO TANIO)');
    expect(questions?.item(4).textContent).toBe('5. Co by zmienił w ofercie firmy ACME');

    const calendar = card?.querySelectorAll('p-calendar');
    expect(calendar?.length).toBe(1);

    const inputNumber = card?.querySelectorAll('p-inputNumber');
    expect(inputNumber?.length).toBe(1);

    const selectButton = card?.querySelectorAll('p-selectButton');
    expect(selectButton?.length).toBe(1);

    const textarea = card?.querySelectorAll('textarea');
    expect(textarea?.length).toBe(1);
  })

  it('should render add button and emit event on click', fakeAsync(() => {
    spyOn(component, 'onAdd');
    const button = html.querySelector('p-button');
    (button as HTMLElement).click();
    tick();
    expect(component.onAdd).toHaveBeenCalled();
  }));
});
