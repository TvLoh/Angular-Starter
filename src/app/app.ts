import { Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { Store } from '@ngxs/store';
import { AppSetInitialUserRoleAction } from './shared/state/AppState/app.action';
import { DataApiService, MainApiService } from './api/api/services';
import { AppState } from './shared/state/AppState/app.state';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CMatButton } from './shared/ui/customMaterial/c-mat-button/c-mat-button';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    RouterOutlet,
    TranslocoModule,
    CMatButton,
    MatButton
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly destrRef = inject(DestroyRef)
  private readonly store = inject(Store)
  private readonly mainApiSev = inject(MainApiService)
  private readonly dataApiSev = inject(DataApiService)
  public isLoading = this.store.select(AppState.appStateIsLoading).pipe(takeUntilDestroyed(this.destrRef))
  protected title = 'AngularBaseProject';

  constructor() {
    this.store.dispatch(new AppSetInitialUserRoleAction())

    setTimeout(() => {
      this.dataApiSev.apiV1DataTestresultsRetrieve({major_version_name: 'string', testset_name: 'string'})
        .subscribe({
          next: result => {
            console.log(result)
          },
          error: err => {
            console.log(err)
          }
        })

      this.mainApiSev.apiV1OverviewTestrackRetrieve()
        .subscribe({
          next: result => {
            console.log(result)
          },
          error: err => {
            console.log(err)
          }
        })
    }, 10000)
  }


}
