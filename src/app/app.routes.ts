import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ErrorComponent } from '../ page/error/error.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', component: ErrorComponent, pathMatch: 'full' }, // Catch-all route for errors
];
