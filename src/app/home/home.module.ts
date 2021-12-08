import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TrainingDetailsComponent } from '../training-details/training-details.component';
import { SectionsModule } from '../sections/sections.module';
import { TrainingComponent } from '../training/training.component';
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        NgxShimmerLoadingModule,
        SectionsModule
    ],
    declarations: [ HomeComponent,TrainingComponent,TrainingDetailsComponent],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
