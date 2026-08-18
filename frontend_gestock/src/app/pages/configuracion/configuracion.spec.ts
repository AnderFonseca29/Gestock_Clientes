import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionComponent } from './configuracion';

describe('ConfiguracionComponent', () => {
  let component: ConfiguracionComponent;
  let fixture: ComponentFixture<ConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse el componente de configuración', () => {
    expect(component).toBeTruthy();
  });

  it('debe alternar el estado de las notificaciones', () => {
    const estadoInicial = component.notificaciones.emailGeneral;
    component.toggleNotificacion('emailGeneral');
    expect(component.notificaciones.emailGeneral).toBe(!estadoInicial);
  });
});