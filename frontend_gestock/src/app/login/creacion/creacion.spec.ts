import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionComponent } from './creacion';

describe('Creacion', () => {
  let component: CreacionComponent;
  let fixture: ComponentFixture<CreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreacionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
