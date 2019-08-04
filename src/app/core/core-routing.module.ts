import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: '../users/users.module#UsersModule',
      },
      {
        path: 'posts',
        loadChildren: '../post/post.module#PostModule',
      },
      {
        path: 'analytics',
        loadChildren: '../analytics/analytics.module#AnalyticsModule',
      },
      {
        path: 'help',
        loadChildren: '../help/help.module#HelpModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
