import { Routes } from '@angular/router';
import { DashboardComponent } from '../ page/dashboard/dashboard.component';
import { UserComponent } from '../ page/user/user.component';
import { LayoutComponent } from './layout.component';

export const ROUTER_LAYOUT: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../ page/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('../ page/user/user.component').then((m) => m.UserComponent),
      },
    ],
  },
];
