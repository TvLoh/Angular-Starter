import { TestBed } from '@angular/core/testing';

import { LoadingInterceptor } from './loading.interceptor';
import { HttpClient, provideHttpClient, withInterceptors } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { AppStateSetGlobalLoadingOverlayAction } from '../../shared/state/AppState/app.action';
import { Store } from '@ngxs/store';

describe('LoadingService', () => {
  let storeMock: jest.Mocked<Store>
  let httpClient: HttpClient
  let httpMock: HttpTestingController

  beforeEach(() => {
    storeMock = {
      dispatch: jest.fn().mockImplementation(() => {
        return of(undefined)
      })
    } as unknown as jest.Mocked<Store>

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([LoadingInterceptor])),
        provideHttpClientTesting(),
        {provide: Store, useValue: storeMock}
      ]
    })

    httpMock = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })

  it('should dispatch true on first request and false after complete', () => {
    httpClient.get('/test').subscribe()

    const req = httpMock.expectOne('/test')
    expect(storeMock.dispatch).toHaveBeenCalledWith(new AppStateSetGlobalLoadingOverlayAction(true));

    req.flush({})
    expect(storeMock.dispatch).toHaveBeenCalledWith(new AppStateSetGlobalLoadingOverlayAction(false));
  })
})
