import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let html: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserAnimationsModule,
        AccordionModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render 2 accordion panels', () => {
    const accordions = html.querySelectorAll('p-accordiontab');
    expect(accordions.length).toBe(2);

    const titles = html.querySelectorAll('span.p-accordion-header-text');
    expect(titles.item(0).textContent).toBe(' Dodaj ankiete ');
    expect(titles.item(1).textContent).toBe(' Wyświetl odpowiedzi ');
  })
});
