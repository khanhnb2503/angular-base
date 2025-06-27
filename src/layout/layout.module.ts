import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTER_LAYOUT } from './routes';

@NgModule({
  imports: [RouterModule.forChild(ROUTER_LAYOUT)],
})
export class LayoutModule {}
