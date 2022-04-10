import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './footer/bottomnavbar.component';
import { LayoutComponent } from './gift card/cardlayout.component';
import { GiftCardComponent } from './gift card/giftcard.component';
import { NextTripCardComponent } from './gift card/next_trip_card.component';
import { SecondTopNavBarComponent } from './header/second.topnavbar.component';
import { TopNavBarComponent } from './header/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { OnlineExpComponent } from './pages/online_experiences_layout.component';
import { HomeLayoutComponent } from './pages/home_layout.component';
import { HostComponent } from './pages/become_host_layout.component';
import { HostHomeComponent } from './pages/host_home_layout.component';
import { HelpComponent } from './pages/help_layout.component';
import { HostExperienceComponent } from './pages/host_experience_layout.component';
import { VerticalCardComponent } from './pages/vertical_card.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http';
import { AddCardsComponent } from './add-cards/add-cards.component'
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    BottomNavBarComponent,
    GiftCardComponent,
    NextTripCardComponent,
    LayoutComponent,
    OnlineExpComponent,
    HomeLayoutComponent,
    HostComponent,
    HostHomeComponent,
    HelpComponent,
    HostExperienceComponent,
    VerticalCardComponent,
    UserInfoComponent,
    AddCardsComponent,
    AuthComponent

    

    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'airbnb'),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
