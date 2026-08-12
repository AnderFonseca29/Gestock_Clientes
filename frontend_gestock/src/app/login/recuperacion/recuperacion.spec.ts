import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionComponent } from './recuperacion';

describe('Recuperacion', () => {
  let component: RecuperacionComponent;
  let fixture: ComponentFixture<RecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperacionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
