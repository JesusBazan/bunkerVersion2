import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCoorComponent } from './dashboard-coor.component';

describe('DashboardCoorComponent', () => {
  let component: DashboardCoorComponent;
  let fixture: ComponentFixture<DashboardCoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
