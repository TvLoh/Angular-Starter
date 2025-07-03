import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { Store } from '@ngxs/store';
import { AppSetInitialUserRoleAction } from './shared/state/AppState/app.action';
import { DataApiService, MainApiService } from './api/api/services';

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
  private readonly mainApiSev = inject(MainApiService)
  private readonly dataApiSev = inject(DataApiService)
  protected title = 'AngularBaseProject';

  constructor() {
    this.store.dispatch(new AppSetInitialUserRoleAction())

    this.dataApiSev.apiV1DataTestresultsRetrieve({major_version_name: 'string', testset_name: 'string'}).subscribe({
      next: result => {
        console.log(result)
      },
      error: err => {
        console.log(err)}
    })

    this.mainApiSev.apiV1OverviewTestrackRetrieve().subscribe({
      next: result => {
        console.log(result)
      },
      error: err => {
        console.log(err)}
    })
  }

}
