import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasControl } from './alertas-control';

describe('AlertasControl', () => {
  let component: AlertasControl;
  let fixture: ComponentFixture<AlertasControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertasControl],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertasControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
