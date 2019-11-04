import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard01Component } from './dashboard01/dashboard01.component';


const routes: Routes = [
  {path:'' ,component:SignupComponent},
  {path:'login' ,component:LoginComponent},
  {path:'menu' ,component:DashboardComponent},
  {path:'dashboard' ,component:Dashboard01Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
