import { Component, signal, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-c-mat-button',
  imports: [
    MatButton
  ],
  templateUrl: './c-mat-button.html',
  styleUrl: './c-mat-button.scss',
  host: {
    '[style.--mat-sys-corner-full]': 'borderRadius() + "px"'
  },
})
export class CMatButton {
  borderRadius: Signal<number> = signal(20)
}
