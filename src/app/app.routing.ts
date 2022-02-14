import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { TrainingComponent } from './training/training.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { CustomerStatusComponent } from './customer-status/customer-status.component';
import { CustomerUnsuccessComponent } from './customer-unsuccess/customer-unsuccess.component';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { ContactUnsuccessComponent } from './contact-unsuccess/contact-unsuccess.component';
import { FreeTrainingContentComponent } from './free-training-content/free-training-content.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    {path: 'trainingDetails/:id',    component: TrainingDetailsComponent },
    {path: 'statusInscription/successful', component: CustomerStatusComponent },
    {path: 'statusInscription/unsuccessful', component: CustomerUnsuccessComponent},
    {path: 'statusContact/successful', component: ContactSuccessComponent},
    {path: 'statusContact/unsuccessful', component: ContactUnsuccessComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'FreeTrainingContentComponent', component: FreeTrainingContentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
