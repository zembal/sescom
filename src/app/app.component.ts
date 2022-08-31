import {Component} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {NetworkStatusService} from "./services/network-status.service";
import {Questionnaire} from "./models/questionnaire.interface";
import {StoreService} from "./services/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public questionnaireVisible: boolean;
  public networkStatus: boolean;

  constructor(
    private primengConfig: PrimeNGConfig,
    private networkStatusService: NetworkStatusService,
    private storeService: StoreService
  ) {
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
      .subscribe(isOnline => {
        console.log('isOnline: ', isOnline);
        this.networkStatus = isOnline;
      })
  }

}
