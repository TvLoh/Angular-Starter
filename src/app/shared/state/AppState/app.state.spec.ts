import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './app.state';

describe('AppState', () => {
  let store: Store


  const userDO: any = {
    familyName: "Family",
    givenName: "Forename",
    department: "Dep",
    roles: ["termo_process_steering_responsible"]
  }

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([AppState]) // Initialisiert den NGXS Store mit dem AppState
      ],
      providers: []
    })
    store = TestBed.inject(Store)
  })

  it('should initialize with default state', () => {
    const userRoles: string[] = store.selectSnapshot(AppState.appStateUserRoles);
    expect(userRoles).toStrictEqual([])
    expect(store.selectSnapshot(AppState.hasWriteRights)).toEqual(false)
  })
})
