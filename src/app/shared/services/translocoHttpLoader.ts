import { Injectable } from '@angular/core';
import { TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private readonly http: HttpClient) {
  }

  getTranslation(lang: string): Observable<any> {
    return forkJoin({
      common: this.http.get(`/assets/i18n/${lang}.common.json`),
      error: this.http.get(`/assets/i18n/${lang}.error.json`),
    }).pipe(
      map(translations => ({
        ...translations.common,
        ...translations.error
      }))
    )
  }
}
