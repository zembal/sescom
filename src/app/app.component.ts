import {Component, EventEmitter, OnDestroy} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {NetworkStatusService} from "./services/network-status.service";
import {Questionnaire} from "./models/questionnaire.interface";
import {StoreService} from "./services/store.service";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {

  private unsubscribe = new EventEmitter<boolean>();
  public questionnaireVisible: boolean;
  public isOnline: boolean;

  constructor(
    private primengConfig: PrimeNGConfig,
    private networkStatusService: NetworkStatusService,
    private storeService: StoreService
  ) {
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  public addQuestionnaire(): void {
    this.questionnaireVisible = true;
  }

  public onAdd(questionnaire: Questionnaire): void {
    this.storeService.addAnswer(questionnaire);
  }

  public onClose(): void {
    this.questionnaireVisible = false;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.networkStatusService.isOnline()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(isOnline => this.isOnline = isOnline)
  }

}
