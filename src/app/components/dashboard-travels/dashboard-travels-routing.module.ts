import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTravelsComponent } from './dashboard-travels.component';

import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateTravelComponent } from './travels/create-travel/create-travel.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardTravelsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'travels',
        component: TravelsComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'create-travel',
        component: CreateTravelComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardTravelsRoutingModule {}
