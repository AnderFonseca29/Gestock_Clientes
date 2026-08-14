import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioService } from './inventario-service';

describe('InventarioService', () => {
  let component: InventarioService;
  let fixture: ComponentFixture<InventarioService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioService],
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
