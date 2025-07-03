import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMatButton } from './c-mat-button';

describe('CMatButton', () => {
  let component: CMatButton;
  let fixture: ComponentFixture<CMatButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CMatButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMatButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
