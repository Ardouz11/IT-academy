import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SectionsModule } from '../sections/sections.module';
import { TrainingComponent } from '../training/training.component';
import { TrainingDetailsComponent } from '../training-details/training-details.component';
import { CustomerStatusComponent } from '../customer-status/customer-status.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CustomerUnsuccessComponent } from '../customer-unsuccess/customer-unsuccess.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgxShimmerLoadingModule,
        MatCardModule,
        MatButtonModule,
        SectionsModule
    ],
    declarations: [ HomeComponent ,
        TrainingComponent,
        TrainingDetailsComponent,
        ContactUsComponent,
        CustomerUnsuccessComponent
        ,CustomerStatusComponent],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
