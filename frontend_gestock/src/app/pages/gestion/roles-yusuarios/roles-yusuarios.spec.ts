import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesYusuariosComponent } from './roles-yusuarios';

describe('RolesYusuarios', () => {
  let component: RolesYusuariosComponent;
  let fixture: ComponentFixture<RolesYusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesYusuariosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RolesYusuariosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
