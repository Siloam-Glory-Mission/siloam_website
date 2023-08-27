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
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { UpdatesComponent } from './updates/updates.component';
import { LastupdatedComponent } from './lastupdated/lastupdated.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'baptised',
    component:BaptisedComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'notbaptised',
    component:NotbaptisedComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'members',
    component:MembersComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'sms',
    component:SmsComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'male',
    component:TotalmaleComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'female',
    component:TotalfemaleComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'tracking',
    component:TrackingComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'update',
    component:UpdateComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'session',
    component:ErrorComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'updateage',
    component:UpdatesComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'lastupdated',
    component:LastupdatedComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'livevideos',
    component:YoutubeComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'otpverification',
    component:OtpComponent,
    canActivate:[AuthGuard]
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
