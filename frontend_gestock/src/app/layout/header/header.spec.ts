import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Gestock as system name', () => {
    expect(component.nombreSistema).toBe('Gestock');
  });

  it('should have a user name', () => {
    expect(component.userName).toBeTruthy();
  });

  it('should update date and time', () => {
    component.actualizarFechaHora();

    expect(component.fechaActual()).toBeTruthy();
    expect(component.horaActual()).toBeTruthy();
  });
});