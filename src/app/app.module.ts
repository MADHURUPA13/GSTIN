import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MatSidenavModule} from'@angular/material/sidenav';
import{
MatButtonModule,
MatButtonToggleModule,
MatIconModule,
MatProgressSpinnerModule,
MatToolbarModule
} from'@angular/material';
import { User1Component } from './user1/user1.component'


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    Dashboard01Component,
    User1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
