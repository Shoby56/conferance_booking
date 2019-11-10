import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './poweruser/home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BookingHistoryComponent } from './poweruser/booking-history/booking-history.component';
import { SuperhomeComponent } from './superuser/superhome/superhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BookingHistoryComponent,
    SuperhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
