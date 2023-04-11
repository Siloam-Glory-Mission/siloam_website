import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaptisedComponent } from './baptised/baptised.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { NotbaptisedComponent } from './notbaptised/notbaptised.component';
import { SmsComponent } from './sms/sms.component';
import { TotalfemaleComponent } from './totalfemale/totalfemale.component';
import { TotalmaleComponent } from './totalmale/totalmale.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard] // Protect this route with the AuthGuard
  },
  {
    path:'baptised',
    component:BaptisedComponent,
    canActivate: [AuthGuard] // Protect this route with the AuthGuard
  },
  {
    path:'notbaptised',
    component:NotbaptisedComponent,
    canActivate: [AuthGuard] // Protect this route with the AuthGuard
  },
  {
    path:'members',
    component:MembersComponent,
    canActivate: [AuthGuard] // Protect this route with the AuthGuard
  },
  {
    path:'sms',
    component:SmsComponent,
    canActivate: [AuthGuard] // Protect this route with the AuthGuard
  },
  {
    path:'male',
    component:TotalmaleComponent,
    canActivate: [AuthGuard] // Protect this route with the AuthGuard
  },
  {
    path:'female',
    component:TotalfemaleComponent,
    canActivate: [AuthGuard] // Protect this route with the AuthGuard
  },
  {
    path:'tracking',
    component:TrackingComponent,
    canActivate: [AuthGuard] // Protect this route with the AuthGuard
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
