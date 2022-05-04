import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelsComponent } from './travels/travels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Componentes */
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelUpdateComponent } from './travel-update/travel-update.component';
import { TravelAddComponent } from './travel-add/travel-add.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';

/* Material components */

@NgModule({
  declarations: [
    AppComponent,
    TravelsComponent,
    TravelDetailComponent,
    TravelUpdateComponent,
    TravelAddComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
