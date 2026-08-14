import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarInventario } from './cambiar-inventario';

describe('CambiarInventario', () => {
  let component: CambiarInventario;
  let fixture: ComponentFixture<CambiarInventario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarInventario],
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarInventario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
