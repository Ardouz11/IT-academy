import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { ContactUnsuccessComponent } from './contact-unsuccess/contact-unsuccess.component';
import { FreeTrainingComponent } from './free-training/free-training.component';
import { FreeTrainingContentComponent } from './free-training-content/free-training-content.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,

    LoginComponent,

    ContactSuccessComponent,

    ContactUnsuccessComponent,

    FreeTrainingComponent,

    FreeTrainingContentComponent,
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    
    HomeModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
