import { Directive, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cellTemplate]'
})
export class TableCellDirective {
  @Input('cellTemplate') key!: string;

  constructor(
    public template: TemplateRef<any>
  ) {}
}