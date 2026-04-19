import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Pipe({
	name: 'errors',
	pure: false
})
export class ErrorsPipe implements PipeTransform {
	transform(control: AbstractControl | null): any {
		if (!control || !control.errors) return null;

		const errors = control.errors;

		if (errors['startGreaterThanToday']) {
			return 'Vui lòng nhập ngày bắt đầu nhỏ hơn ngày hiện tại!';
		}

		if (errors['startGreaterThanEnd']) {
			return 'Vui lòng nhập ngày bắt đầu nhỏ hơn ngày kết thúc!';
		}
		if (errors['required']) return 'Trường này là bắt buộc';
		if (errors['min']) return `Giá trị phải ≥ ${errors['min'].min}`;
		if (errors['max']) return `Giá trị phải ≤ ${errors['max'].max}`;
		if (errors['minlength']) return `Ít nhất ${errors['minlength'].requiredLength} ký tự`;
		if (errors['maxlength']) return `Không quá ${errors['maxlength'].requiredLength} ký tự`;

		return null;
	}
}

@Directive({
	selector: '[hasAnyPermission]'
})
export class HasAnyPermissionDirective {
	private requiredPermissions: { featureCode: string, actionCodes: string[] } = { featureCode: '', actionCodes: [] };
	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
	) {}

	@Input()
	set hasAnyPermission(value: { featureCode: string; actionCodes: string[] }) { 
		this.requiredPermissions = value; 
		this.updateView(); 
	}

	private updateView() {
		this.viewContainer.createEmbeddedView(this.templateRef);
	}
}