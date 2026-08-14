import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosService } from './services';

describe('Services', () => {
  let component: UsuariosService;
  let fixture: ComponentFixture<UsuariosService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosService],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
