import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FakeService } from '../services';

import { HomeOutline, UserOutline } from '@ant-design/icons-angular/icons';
import {
  concatMap,
  delay,
  from,
  fromEvent,
  interval,
  map,
  of,
  range,
  switchMap,
  tap,
} from 'rxjs';
const icons = [HomeOutline, UserOutline];

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
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  selectedMenu: string = '/dashboard';
  listMenus: Array<any> = [
    { title: 'Thống kê', route: '/dashboard' },
    { title: 'Người dùng', route: '/user' },
    { title: 'Bài viết', route: '/post' },
    { title: 'Sản phẩm', route: '/product' },
    { title: 'Giỏ hàng', route: '/cart' },
    { title: 'Đơn hàng', route: '/order' },
    { title: 'Thanh toán', route: '/payment' },
    { title: 'Thống kê', route: '/statistic' },
    { title: 'Cài đặt', route: '/setting' },
    { title: 'Giới thiệu', route: '/about' },
    { title: 'Liên hệ', route: '/contact' },
    { title: 'Đăng nhập', route: '/login' },
    { title: 'Đăng ký', route: '/register' },
    { title: '404 Not Found', route: '/404' },
  ];
  constructor() {}

  ngOnInit() {}
  onSelectedMenu(menu: any) {}
}
