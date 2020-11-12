import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ComoingsoonComponent } from './modules/comoingsoon/comoingsoon.component';
import { LandingpageComponent } from './modules/landingpage/landingpage.component';
import { ProfileComponent } from './modules/profile/profile.component';


const routes: Routes = [
  { path: "", component: LandingpageComponent },
  {
    path: "default", component: DefaultComponent,
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "comingSoon", component: ComoingsoonComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
