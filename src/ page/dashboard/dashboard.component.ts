import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-dashboard',
  imports: [NzTabsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
