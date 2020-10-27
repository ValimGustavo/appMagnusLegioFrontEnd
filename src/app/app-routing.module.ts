import { DashboardComponent as DashboardComponentAdmin } from './modules/admin/components/dashboard/dashboard.component';
import { DashboardComponent } from './modules/user/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    component: DashboardComponent
  },
  {
    path: 'admin',
    component: DashboardComponentAdmin
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
