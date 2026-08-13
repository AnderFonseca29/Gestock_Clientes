import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { provideRouter } from '@angular/router';
import { LayoutComponent } from './layout';

describe('LayoutComponent', () => {
=======

import { LayoutComponent } from './layout';

describe('Layout', () => {
>>>>>>> origin/develop
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
<<<<<<< HEAD
      providers: [provideRouter([])]
=======
>>>>>>> origin/develop
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
<<<<<<< HEAD
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
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
