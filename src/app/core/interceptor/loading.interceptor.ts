import { inject } from '@angular/core';
import { HttpEvent, HttpInterceptorFn } from "@angular/common/http";
import { finalize, Observable } from "rxjs";
import { Store } from '@ngxs/store';
import { AppStateSetGlobalLoadingOverlayAction } from '../../shared/state/AppState/app.action';

export const LoadingInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<unknown>> => {
  const store = inject(Store);

  GlobalLoadingCounter.increment(store);

  return next(req).pipe(
    finalize(() => GlobalLoadingCounter.decrement(store))
  );
};

class GlobalLoadingCounter {
  private static requestCount = 0;

  static increment(store: Store): void {
    if (this.requestCount === 0) {
      store.dispatch(new AppStateSetGlobalLoadingOverlayAction(true))
    }
    this.requestCount++;
  }

  static decrement(store: Store): void {
    this.requestCount--;
    if (this.requestCount === 0) {
      store.dispatch(new AppStateSetGlobalLoadingOverlayAction(false));
    }
  }
}
