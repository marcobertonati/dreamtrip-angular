import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* My components */
import { TravelsComponent } from './travels/travels.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelUpdateComponent } from './travel-update/travel-update.component';
import { TravelAddComponent } from './travel-add/travel-add.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  /*If user go to path / --> redirect to login */
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  
  { path: 'login', component: LoginComponent },

  /*Lazy Load */
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard-travels/dashboard-travels.module').then(
        (m) => m.DashboardTravelsModule
      ),
  },

  { path: 'travel/:id_travel', component: TravelDetailComponent },
  { path: 'travel/update/:id_travel', component: TravelUpdateComponent },
  { path: 'add', component: TravelAddComponent },

  /*If user go to path no declarated this goona redirect to login */
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
