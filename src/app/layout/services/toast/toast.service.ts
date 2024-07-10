import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  initState = 'INIT';

  private send$ = new BehaviorSubject<Message>({ summary: this.initState });
  sendSub = this.send$.asObservable();

  constructor() {}

  public send(message: Message) {
    this.send$.next(message);
  }
}
