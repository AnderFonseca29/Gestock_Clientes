import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { provideRouter } from '@angular/router';
import { SidebarComponent } from './sidebar';

describe('SidebarComponent', () => {
=======

import { SidebarComponent } from './sidebar';

describe('Sidebar', () => {
>>>>>>> origin/develop
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
<<<<<<< HEAD
      providers: [provideRouter([])]
=======
>>>>>>> origin/develop
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
<<<<<<< HEAD
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener el item de Reportes disponible', () => {
    const reportes = component.menu.find(item => item.ruta === '/reportes');
    expect(reportes?.disponible).toBe(true);
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
