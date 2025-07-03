import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TranslocoModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AngularBaseProject';
}
