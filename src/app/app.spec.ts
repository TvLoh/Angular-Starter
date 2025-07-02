import { App } from './app';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('App', () => {
  let component: App
  let fixture: ComponentFixture<App>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
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
    fixture.detectChanges(); // Änderungen anwenden
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AngularBaseProject'); // Erwartet, dass der Titel korrekt gerendert wird
  });
});
