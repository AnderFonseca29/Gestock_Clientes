import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportesComponent } from './reportes';

describe('ReportesComponent', () => {
  let component: ReportesComponent;
  let fixture: ComponentFixture<ReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar las categorías de "todas" las bodegas por defecto', () => {
    expect(component.bodegaSeleccionada).toBe('todas');
    expect(component.categorias.length).toBeGreaterThan(0);
  });

  it('debe cambiar de vista al hacer clic en un tab', () => {
    component.cambiarVista('movimientos');
    expect(component.vistaActiva).toBe('movimientos');
  });

  it('debe abrir y cerrar el detalle de una categoría', () => {
    component.verDetalleCategoria(0);
    expect(component.categoriaSeleccionada).toBe(0);

    component.verDetalleCategoria(0);
    expect(component.categoriaSeleccionada).toBeNull();
  });

  it('debe abrir el modal de exportación', () => {
    component.abrirModalExportar();
expect(component.mostrarModalExportar).toBe(true);  });
});
