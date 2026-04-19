import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ApiService } from '@services';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDrawerService, NzDrawerRef, NzDrawerModule } from 'ng-zorro-antd/drawer';
import { UserComponent } from '@modules/user/user.component';
import { BehaviorSubject, finalize, from, mergeMap, of, Subject, Subscription, switchMap, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { DestroyRef } from '@angular/core';
import { TableComponent } from '@modules/base-ui/base-ui.component';
import { TableCellDirective } from './td-cell.directive';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    NzIconModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    RouterOutlet,
    NzTabsModule,
    NzDrawerModule,
    TableComponent,
    TableCellDirective,
    UserComponent,
    NzSpinModule,
    TableComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit, AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private drawerService: NzDrawerService,
  ) { }
  form!: FormGroup;
  loadingJob: boolean = false;

  ngOnInit(): void {
    this.onGetDetail();
  }

  ngAfterViewInit(): void {
  }

  obStartJob$ = of({ jobId: 1 });

  onGetDetail() {
    this.obStartJob$
    this.apiService.getDetailTodo(2)
      .pipe(finalize(() => { console.log('finalize called'); }))
      .subscribe((res) => {
        console.log('job completed', res);
      });
  }

  columns = [
    { key: 'name', title: 'Tên' },
    { key: 'age', title: 'Tuổi' },
    { key: 'address', title: 'Địa chỉ' }
  ];

  data = [
    { name: 'An', age: 25, address: 'Hà Nội' },
    { name: 'Bình', age: 30, address: 'Đà Nẵng' }
  ];
}
