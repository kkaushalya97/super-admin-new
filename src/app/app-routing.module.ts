import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminDashboardComponent } from './layouts/super-admin-dashboard/super-admin-dashboard.component';

const routes: Routes = [
   {path:'admin-dashboard', component:SuperAdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
