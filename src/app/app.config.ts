import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { provideTransloco, translocoConfig, } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './shared/services/translocoHttpLoader';
import { translocoConfiguration } from './shared/constants/translocoConfig';
import { AppState } from './shared/state/AppState/app.state';
import { provideHttpClient } from '@angular/common/http';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: translocoConfig(translocoConfiguration),
      loader: TranslocoHttpLoader,
    }),
    provideStore(
      [AppState],
      withNgxsReduxDevtoolsPlugin(),
      withNgxsStoragePlugin({
        keys: [AppState]
      })
    )
  ]
};

