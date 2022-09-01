import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, fromEvent, merge, Observable, takeUntil} from "rxjs";

@Injectable({providedIn: 'root'})
export class NetworkStatusService implements OnDestroy {

  private unsubscribe = new EventEmitter<boolean>();
  private networkStatus = new BehaviorSubject<boolean>(navigator.onLine);

  constructor() {
    this.watchNetworkStatus();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  public isOnline(): Observable<boolean> {
    return this.networkStatus.asObservable();
  }

  private watchNetworkStatus(): void {
    merge(fromEvent(window, 'online'), fromEvent(window, 'offline'))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(event => this.networkStatus.next(event.type === 'online'));
  }
}
