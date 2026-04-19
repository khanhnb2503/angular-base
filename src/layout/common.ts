import { AbstractControl, ValidatorFn } from "@angular/forms";
import moment from 'moment';

export function startDateValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) return null;

    const parent = control.parent;
    if (!parent) return null;

    const endDate = parent.get('endDate')?.value;
    if (!endDate) return null;

    const start = moment(control.value).startOf('day');
    const end = moment(endDate).startOf('day');

    if (start.isAfter(end)) {
      return { startGreaterThanEnd: true };
    }

    return null;
  };
}

