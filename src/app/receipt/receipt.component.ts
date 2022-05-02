import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  matricula: string = "";
  calle: string = "";
  color: string = "";
  comienzo: string = "";
  fin: string = "";
  precio: string = "";

  constructor(private cookieService: CookieService) {
    this.matricula = cookieService.get('Matricula');
    this.calle = cookieService.get('Calle');
    this.color = cookieService.get('Color');
    this.comienzo = cookieService.get('Inicio');
    this.fin = cookieService.get('Fin');
    this.precio = cookieService.get('Precio');
  }

  ngOnInit(): void {
  }

}
