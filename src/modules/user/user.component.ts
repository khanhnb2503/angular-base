import { CommonModule, Location } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { BehaviorSubject } from 'rxjs';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-user',
  imports: [
    NzSpinModule,
    CommonModule,
    NzCheckboxModule,
    FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {

  constructor(
    private cdr: ChangeDetectorRef,
    private _loaction: Location
  ) { }

  listUnitsTree: any[] = [];
  setOfCheckedId = new Set<string>();
  expandedRows: { [key: string]: boolean } = {};

  dataModal: any = {
    address: "",
    subject: [],
    loading$: BehaviorSubject<boolean>
  }

  loadingFile: boolean = false;
  ngOnInit(): void {
    this.rendeerData();
  }

  rendeerData() {
    this.listUnitsTree = this.parseDataToTree([]);
  }

  private parseDataToTree(units?: any[]): any[] {
    return (units || []).map(unit => ({
      id: unit.id,
      title: unit.unitName,
      key: unit.identifierCode,
      children: this.parseDataToTree(unit.children),
      isLeaf: !unit.children?.length
    }));
  }

  toggleExpand(key: string) {
    this.expandedRows[key] = !this.expandedRows[key];
  }

  onCheck(item: any, checked: boolean) {
    console.time('updateChildren');
    this.updateChildren(item, checked);
    console.timeEnd('updateChildren');
    console.log(this.setOfCheckedId)
  }

  private updateChildren(node: any, checked: boolean) {
    if (checked) {
      this.setOfCheckedId.add(node.key);
    } else {
      this.setOfCheckedId.delete(node.key);
    }

    if (node.children?.length) {
      node.children.forEach((child: any) => this.updateChildren(child, checked));
    }
  }

  renderLog() {
    console.log('render log')
  }
}
