import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.scss']
})
export class LicensePlateComponent implements OnInit {
  constructor(private cookieService: CookieService) {
  }

  matricula = new FormControl('', [Validators.required, Validators.pattern("([A-Z]{1,2})(\\d{4})([A-Z]{0,2})|(\\d{4})([A-Z]{3})")]);

  getErrorMessage() {
    if (this.matricula.hasError('required')) {
      return 'Formato erróneo de matrícula';
    }

    return this.matricula.hasError('matricula') ? 'Matrícula inválida' : '';
  }

  ngOnInit() : void {
    this.matricula.valueChanges.subscribe(cookie_matricula =>
    this.cookieService.set('Matricula', cookie_matricula))
  }

  

}
