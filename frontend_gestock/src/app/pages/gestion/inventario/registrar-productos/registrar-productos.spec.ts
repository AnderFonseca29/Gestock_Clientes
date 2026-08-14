import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProductos } from './registrar-productos';

describe('RegistrarProductos', () => {
  let component: RegistrarProductos;
  let fixture: ComponentFixture<RegistrarProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarProductos],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarProductos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
