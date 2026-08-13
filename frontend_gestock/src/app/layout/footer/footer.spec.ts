import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
=======

import { FooterComponent } from './footer';

describe('Footer', () => {
>>>>>>> origin/develop
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [FooterComponent]
=======
      imports: [FooterComponent],
>>>>>>> origin/develop
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
<<<<<<< HEAD
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe calcular el año actual', () => {
    expect(component.anio).toBe(new Date().getFullYear());
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
