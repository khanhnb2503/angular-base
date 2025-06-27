import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { UserOutline } from '@ant-design/icons-angular/icons';
import { LaptopOutline } from '@ant-design/icons-angular/icons';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    RouterModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [
    {
      provide: NZ_ICONS,
      useValue: [UserOutline, LaptopOutline],
    },
  ],
})
export class LayoutComponent {
  isCollapsed = false;
  selectedMenu: string = '/dashboard';
  listMenus: Array<any> = [
    { title: 'Thống kê', route: '/dashboard' },
    { title: 'Người dùng', route: '/user' },
  ];

  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.navigate([this.selectedMenu]);
    this.onInitOf();
  }

  onSelectedMenu(menu: any) {
    this.selectedMenu = menu.route;
    this._router.navigate([menu.route]);
  }

  onInitOf() {
    of([1, 2, 3, 4, 5])
      .pipe(
        switchMap((value) => {
          return of(value);
        })
      )
      .subscribe({
        next: (_value) => {
          console.log('Next value:', _value);
        },
        error: (error) => {
          console.error('Error occurred:', error);
        },
      });
  }
}
