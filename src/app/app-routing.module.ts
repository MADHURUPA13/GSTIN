import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { User1Component } from './user1/user1.component';


const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'login' ,component:LoginComponent},
  {path:'signin', component:SignupComponent},
  {path:'user1' ,component:User1Component},
  {path:'dashboard01' ,component:Dashboard01Component},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
