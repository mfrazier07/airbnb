import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './footer/bottomnavbar.component';
import { GiftCardComponent } from './gift card/giftcard.component';
import { NextTripCardComponent } from './gift card/next_trip_card.component';
import { SecondTopNavBarComponent } from './header/second.topnavbar.component';
import { TopNavBarComponent } from './header/topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    BottomNavBarComponent,
    GiftCardComponent,
    NextTripCardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
