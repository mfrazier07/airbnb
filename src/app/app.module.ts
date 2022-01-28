import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiftCardComponent } from './cards/giftcard.component';
import { BottomNavBarComponent } from './footer/bottomnavbar.component';
import { SecondTopNavBarComponent } from './header/second.topnavbar.component';
import { TopNavBarComponent } from './header/topnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    BottomNavBarComponent,
    GiftCardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
