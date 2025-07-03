import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TranslocoHttpLoader implements TranslocoLoader {
  private readonly http = inject(HttpClient);

  getTranslation(lang: string): Observable<Translation> {
    return forkJoin({
      common: this.http.get<Translation>(`/i18n/${lang}/common.json`),
      error: this.http.get<Translation>(`/i18n/${lang}/error.json`),
    }).pipe(
      map(({common, error}) => ({...common, ...error}))
    );
  }
}
