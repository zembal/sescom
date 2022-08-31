import {Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent, map, merge, Observable, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class NetworkStatusService {

  private networkStatus = new Subject<boolean>();

  constructor() {
    this.watchNetworkStatus();
  }

  public isOnline(): Observable<boolean> {
    return this.networkStatus.asObservable();
  }

  private watchNetworkStatus(): void {
    merge(fromEvent(window, 'online'), fromEvent(window, 'offline'))
      .subscribe(event => this.networkStatus.next(event.type === 'online'));
  }
}
