import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
=======

import { HeaderComponent } from './header';

describe('Header', () => {
>>>>>>> origin/develop
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [HeaderComponent]
=======
      imports: [HeaderComponent],
>>>>>>> origin/develop
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
<<<<<<< HEAD
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar el nombre del sistema Gestock', () => {
    expect(component.nombreSistema).toBe('Gestock');
  });

  it('debe actualizar la hora al inicializar', () => {
    expect(component.horaActual()).not.toBe('');
  });
});
=======
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> origin/develop
