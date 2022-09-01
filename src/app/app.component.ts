import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from "primeng/api";
import {NetworkStatusService} from "./services/network-status.service";
import {Questionnaire} from "./models/questionnaire.interface";
import {StoreService} from "./services/store.service";
import {takeUntil} from "rxjs";

const OFFLINE_QUESTIONNAIRES = 'offline_questionnaires';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe = new EventEmitter<boolean>();
  public isOnline: boolean;

  constructor(
    private primengConfig: PrimeNGConfig,
    private networkStatusService: NetworkStatusService,
    private storeService: StoreService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.networkStatusService.isOnline()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(isOnline => {
        this.isOnline = isOnline;
        if (isOnline) {
          this.syncOfflineQuestionnaires();
        }
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  public onAdd(questionnaire: Questionnaire): void {
    if (this.isOnline) {
      this.storeService.addAnswer(questionnaire);
    } else {
      this.keepInLocalStorage(questionnaire)
    }
    this.showSuccessToast();
  }

  private keepInLocalStorage(questionnaire: Questionnaire): void {
    const items = this.getLocalStorageItems();
    items.push(questionnaire);
    localStorage.setItem(OFFLINE_QUESTIONNAIRES, JSON.stringify(items));
  }

  private syncOfflineQuestionnaires(): void {
    console.log('wznowiłem połączenie, ładuje ankiety offline...')
    const items = this.getLocalStorageItems();
    items.forEach(item => this.storeService.addAnswer(item));
    localStorage.removeItem(OFFLINE_QUESTIONNAIRES);
  }

  private getLocalStorageItems(): Questionnaire[] {
    let items = new Array<Questionnaire>();
    const currentStorageItems = localStorage.getItem(OFFLINE_QUESTIONNAIRES);
    if (currentStorageItems != null) {
      items = [...JSON.parse(currentStorageItems)];
    }
    return items;
  }

  private showSuccessToast(): void {
    this.messageService.add({severity:'success', summary: 'Sukces', detail: 'Ankieta wysłana'});
  }
}
