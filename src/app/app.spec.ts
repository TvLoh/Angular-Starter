import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // Standalone-Komponente direkt in `imports` einbinden
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Erwartet, dass die App-Komponente erstellt wird
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges(); // Änderungen anwenden
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AngularBaseProject'); // Erwartet, dass der Titel korrekt gerendert wird
  });
});
