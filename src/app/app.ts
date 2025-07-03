import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { Store } from '@ngxs/store';
import { AppSetInitialUserRoleAction } from './shared/state/AppState/app.action';

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
  private readonly store = inject(Store)
  protected title = 'AngularBaseProject';


  constructor() {
    this.store.dispatch(new AppSetInitialUserRoleAction())
  }

}
