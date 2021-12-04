import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { PhotographerComponent } from './photographer/photographer.component';
import { CinematographerComponent } from './cinematographer/cinematographer.component';
import { UserManagementComponent } from './user-management.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DancerComponent } from './dancer/dancer.component';
import { MusicianComponent } from './musician/musician.component';
import { VoiceArtistComponent } from './voice-artist/voice-artist.component';
import { CateringComponent } from './catering/catering.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { ParlourComponent } from './parlour/parlour.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    UserManagementComponent,
    PhotographerComponent,
    CinematographerComponent,
    UserDashboardComponent,
    DancerComponent,
    MusicianComponent,
    VoiceArtistComponent,
    CateringComponent,
    DecoratorComponent,
    ParlourComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,

    //Material UI
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
  ]
})
export class UserManagementModule { }
