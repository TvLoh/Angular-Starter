import { App } from './app';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from './shared/modules/transloco-testing.module';
import { Store } from '@ngxs/store';
import { AppState } from './shared/state/AppState/app.state';
import { of } from 'rxjs';

describe('App', () => {
  let component: App
  let fixture: ComponentFixture<App>
  let storeMock: jest.Mocked<Store>


  beforeEach(async () => {
    storeMock = {
      select: jest.fn().mockImplementation(selector => {
        switch (selector) {
          case AppState.hasWriteRights:
            return of(true)
          default:
            return null
        }
      }),
      dispatch: jest.fn()
    } as unknown as jest.Mocked<Store>

    await TestBed.configureTestingModule({
      providers: [
        {provide: Store, useValue: storeMock},
      ],
      imports: [
        App,
        getTranslocoModule()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('common.yourRoles'); // Erwartet, dass der Titel korrekt gerendert wird
  });
});
