import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  visible: boolean;
  toastVisible: boolean = false;
  toastMessage: string = '';
  toastColor: string = '';
  toastState$ = new BehaviorSubject<boolean>(false);
  toastMessage$ = new BehaviorSubject<string>('');
  toastColor$ = new BehaviorSubject<string>('');
  toastClr = this.toastColor$.asObservable();
  toastMsg = this.toastMessage$.asObservable();
  toast = this.toastState$.asObservable();

  constructor() {
    this.visible = false;
    this.toastVisible = false;
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
  }

  getToastState() {
    return this.toast;
  }

  hideToast() {
    this.toastMessage$.next('');
    this.toastState$.next(false);
  }

  showToastMessage(message, color?) {
    this.toastState$.next(true);
    this.toastMessage$.next(message);
    this.toastColor$.next(color);
  }
}
