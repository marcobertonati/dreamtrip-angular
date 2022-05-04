import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardTravelsRoutingModule } from './dashboard-travels-routing.module';

import { SharedModule } from '../shared/shared.module';
import { DashboardTravelsComponent } from './dashboard-travels.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelsComponent } from './travels/travels.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateTravelComponent } from './travels/create-travel/create-travel.component';

@NgModule({
  declarations: [
    DashboardTravelsComponent,
    HomeComponent,
    NavbarComponent,
    TravelsComponent,
    ReportsComponent,
    CreateTravelComponent,
  ],
  imports: [CommonModule, DashboardTravelsRoutingModule, SharedModule],
})
export class DashboardTravelsModule {}
