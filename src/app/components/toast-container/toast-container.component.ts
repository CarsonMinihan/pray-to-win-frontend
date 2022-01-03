import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent implements OnInit {
  constructor(private ui: UiService) {}
  toast: boolean;
  toastMessage: string;
  toastClass: string;
  toastColor: string;

  ngOnInit(): void {
    this.ui.toast.subscribe((state) => {
      this.toast = state;
    });
    this.ui.toastMsg.subscribe((msg) => {
      this.toastMessage = msg;
    });
    this.ui.toastClr.subscribe((color) => {
      if (color) this.toastColor = 'bg-' + color;
      else this.toastColor = 'bg-success';
    });
  }

  toastClosed() {
    this.ui.hideToast();
  }
}
