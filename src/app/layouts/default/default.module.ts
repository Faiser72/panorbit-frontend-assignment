import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar/sidebar.component';
import { ComoingsoonComponent } from 'src/app/modules/comoingsoon/comoingsoon.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';



@NgModule({
  declarations: [
    DefaultComponent,
    ComoingsoonComponent,
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class DefaultModule { }
