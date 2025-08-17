import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const ROUTER_LAYOUT: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('@modules/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('@modules/user/user.component').then((m) => m.UserComponent),
      },
    ],
  },
];
