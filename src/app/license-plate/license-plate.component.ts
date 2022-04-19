import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.scss']
})
export class LicensePlateComponent  {

  matricula = new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}")]);

  getErrorMessage() {
    if (this.matricula.hasError('required')) {
      return 'Formato erróneo de matrícula';
    }

    return this.matricula.hasError('matricula') ? 'Matrícula inválida' : '';
  }

}
