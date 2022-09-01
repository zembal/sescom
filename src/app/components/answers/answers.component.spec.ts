import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AnswersComponent} from './answers.component';
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";

describe('AnswersComponent', () => {
  let component: AnswersComponent;
  let fixture: ComponentFixture<AnswersComponent>;
  let html: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswersComponent],
      imports: [
        BrowserAnimationsModule,
        PanelModule,
        TableModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AnswersComponent);
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
    expect(title).toBe('Odpowiedzi');
  })

  it('should render filter input field', () => {
    const filterInput = html.querySelector('div.p-panel-content input');
    expect(filterInput).toBeDefined();

    const placeholder = filterInput?.getAttribute('placeholder');
    expect(placeholder).toBe('Filtruj po imieniu, nazwisku i PESEL')
  })

  it('should render table', () => {
    const table = html.querySelector('p-table');
    expect(table).toBeDefined();

    const columnHeaders = table?.querySelectorAll('thead th');
    const nameHeader = columnHeaders?.item(0).textContent;
    expect(nameHeader).toBe('Imię');

    const lastnameHeader = columnHeaders?.item(1).textContent;
    expect(lastnameHeader).toBe('Nazwisko');

    const peselHeader = columnHeaders?.item(2).textContent;
    expect(peselHeader).toBe('PESEL');

    const mobileHeader = columnHeaders?.item(3).textContent;
    expect(mobileHeader).toBe('Telefon');

    const addressHeader = columnHeaders?.item(4).textContent;
    expect(addressHeader).toBe('Adres');

    const cityHeader = columnHeaders?.item(5).textContent;
    expect(cityHeader).toBe('Miasto');

    const zipCodeHeader = columnHeaders?.item(6).textContent;
    expect(zipCodeHeader).toBe('Kod Pocztowy');

    const lastConsumptionDateHeader = columnHeaders?.item(7).textContent;
    expect(lastConsumptionDateHeader).toBe('Data Ostatniego spożycia');

    const hawOfterPerWeekHeader = columnHeaders?.item(8).textContent;
    expect(hawOfterPerWeekHeader).toBe('Spożycie w tygodniu');

    const satisfiedHeader = columnHeaders?.item(9).textContent;
    expect(satisfiedHeader).toBe('Zadowolonie ze smaku');

    const priceRangeHeader = columnHeaders?.item(10).textContent;
    expect(priceRangeHeader).toBe('Ocena obecnych cen');

    const toChangeHeader = columnHeaders?.item(11).textContent;
    expect(toChangeHeader).toBe('Propozycja zmian');
  })
});
