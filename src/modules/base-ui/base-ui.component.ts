import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';
import { TableCellDirective } from '../../layout/td-cell.directive';
import { CommonModule } from '@angular/common';

@Component({
  imports:[CommonModule],
  selector: 'app-table',
  templateUrl: './base-ui.component.html',
  styleUrl: './base-ui.component.scss'
})
export class TableComponent implements AfterContentInit {

  @Input() columns: any[] = [];
  @Input() data: any[] = [];

  @ContentChildren(TableCellDirective) cellTemplates!: QueryList<TableCellDirective>;

  templateMap = new Map<string, any>();

  ngAfterContentInit() {
    this.cellTemplates.forEach(template => {
      this.templateMap.set(template.key, template.template);
    });
  }

  getTemplate(key: string) {
    return this.templateMap.get(key);
  }
}