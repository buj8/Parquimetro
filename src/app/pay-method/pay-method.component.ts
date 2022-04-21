import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.scss']
})
export class PayMethodComponent implements OnInit {
  

  modelo = new FormControl();
  numero = new FormControl('', [Validators.required, Validators.pattern("\\d{16}")]);

  getErrorMessage_numero() {
    if (this.numero.hasError('required')) {
      return 'Debe contener 16 dígitos';
    }
    return this.numero.hasError('numero') ? 'Número inválido' : '';
  }

  cvc = new FormControl('', [Validators.required, Validators.pattern("\\d{3}")]);

  getErrorMessage_cvc() {
    if (this.numero.hasError('required')) {
      return 'Debe contener 3 dígitos';
    }
    return this.numero.hasError('cvc') ? 'Número inválido' : '';
  }

  dexpire = new FormControl('', [Validators.required, Validators.pattern("(([1-2][0-9])|([1-9])|(3[0-1]))/((1[0-2])|([1-9]))")]);
  getErrorMessage_dexpire() {
    if (this.dexpire.hasError('required')) {
      return 'Formato DD/MM';
    }
    return this.dexpire.hasError('dexpire') ? 'Fecha inválida' : '';
  }
  
  options: string[] = ['Visa', 'Mastercard', 'American Express'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.modelo.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
