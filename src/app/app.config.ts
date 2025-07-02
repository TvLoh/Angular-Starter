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

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    importProvidersFrom(
      NgxsModule.forRoot([
        AppState,
      ]),
    ),
    provideTransloco({
      config: translocoConfig(translocoConfiguration),
      loader: TranslocoHttpLoader, // oder eine Factory, wenn du willst
    }),
  ]
};

