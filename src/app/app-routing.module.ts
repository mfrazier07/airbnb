import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OnlineExpComponent } from './pages/online_experiences_layout.component';
import { HomeLayoutComponent } from './pages/home_layout.component';
import { HostComponent } from './pages/become_host_layout.component';
import { HostHomeComponent } from './pages/host_home_layout.component';
import { HelpComponent } from './pages/help_layout.component';
import { HostExperienceComponent } from './pages/host_experience_layout.component';
import { AddCardsComponent } from './add-cards/add-cards.component';

const routes:Routes = [
  {path: '', component:HomeLayoutComponent},
  {path: 'online-experiences', component: OnlineExpComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'become-a-host', component: HostComponent},
  {path: 'host-home', component: HostHomeComponent},
  {path: 'help', component: HelpComponent},
  {path: 'host-experience', component: HostExperienceComponent},
  {path: 'admin', component: AddCardsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
