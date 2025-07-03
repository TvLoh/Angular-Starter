import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { provideTransloco, translocoConfig, } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './shared/services/translocoHttpLoader';
import { translocoConfiguration } from './shared/constants/translocoConfig';
import { AppState } from './shared/state/AppState/app.state';
import { provideHttpClient } from '@angular/common/http';

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
    importProvidersFrom(
      NgxsModule.forRoot([
        AppState,
      ]),
    )
  ]
};

