import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaptisedComponent } from './baptised/baptised.component';
import { NotbaptisedComponent } from './notbaptised/notbaptised.component';
import { MembersComponent } from './members/members.component';
import { TotalmaleComponent } from './totalmale/totalmale.component';
import { TotalfemaleComponent } from './totalfemale/totalfemale.component';
import { SmsComponent } from './sms/sms.component';
import { TrackingComponent } from './tracking/tracking.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchPipe } from './core/services/search.pipe';
import { LoadingInterceptor } from './loading.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import {NgxPrintModule} from 'ngx-print';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LatestComponent } from './latest/latest.component';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { UpdatesComponent } from './updates/updates.component';
import { LastupdatedComponent } from './lastupdated/lastupdated.component';
import { YoutubeComponent } from './youtube/youtube.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BaptisedComponent,
    NotbaptisedComponent,
    MembersComponent,
    TotalmaleComponent,
    TotalfemaleComponent,
    SmsComponent,
    TrackingComponent,
    SidebarComponent,
    HeaderComponent,
    LoadingComponent,
    SearchPipe,
    LatestComponent,
    UpdateComponent,
    ErrorComponent,
    UpdatesComponent,
    LastupdatedComponent,
    YoutubeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,
    CommonModule,
    NgxPrintModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);


