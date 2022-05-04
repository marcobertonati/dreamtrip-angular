import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTravelsComponent } from './dashboard-travels.component';

describe('DashboardTravelsComponent', () => {
  let component: DashboardTravelsComponent;
  let fixture: ComponentFixture<DashboardTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTravelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
