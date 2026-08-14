import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { SidebarComponent } from './sidebar';
import { provideRouter } from '@angular/router';

describe('SidebarComponent', () => {

=======

import { SidebarComponent } from './sidebar';

describe('Sidebar', () => {
>>>>>>> origin/develop
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
<<<<<<< HEAD

    await TestBed.configureTestingModule({

      imports: [
        SidebarComponent
      ],

      providers: [
        provideRouter([])
      ]

    }).compileComponents();


    fixture =
      TestBed.createComponent(
        SidebarComponent
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });


  it('should create', () => {

    expect(component)
      .toBeTruthy();

  });

});
=======
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> origin/develop
