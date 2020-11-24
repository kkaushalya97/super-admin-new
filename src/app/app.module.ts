import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperAdminLoginComponent } from './layouts/super-admin-login/super-admin-login.component';
import { CreateTenantComponent } from './layouts/create-tenant/create-tenant.component';
import { SideNavBarComponent } from './layouts/side-nav-bar/side-nav-bar.component';
import { SuperAdminDashboardComponent } from './layouts/super-admin-dashboard/super-admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageHandler } from './helpers/error-handler';
import { ApiService } from './services/shared/api.service';
import { TenantService } from './services/tenant.service';


@NgModule({
  declarations: [
    AppComponent,
    SuperAdminLoginComponent,
    CreateTenantComponent,
    SideNavBarComponent,
    SuperAdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'add-tenant',
        component:CreateTenantComponent
      },
      {
        path:'admin-dashboard',
        component:SuperAdminDashboardComponent
      },
      {
        path:'admin-dashboard/edit/:id',
        component:CreateTenantComponent
      },
      {
        path:'',
        component:SuperAdminLoginComponent
      }
    ])
  ],
  providers: [ErrorMessageHandler, ApiService, TenantService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
