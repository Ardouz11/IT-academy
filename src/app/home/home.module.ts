import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SectionsModule } from '../sections/sections.module';
import { TrainingComponent } from '../training/training.component';
import { TrainingDetailsComponent } from '../training-details/training-details.component';
import { CustomerStatusComponent } from '../customer-status/customer-status.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule
    ],
    declarations: [ HomeComponent ,
        TrainingComponent,
        TrainingDetailsComponent,
        ContactUsComponent
        ,CustomerStatusComponent],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
