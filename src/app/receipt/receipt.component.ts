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
  comienzo: string = "12:20";
  fin: string = "12:48";
  precio: string = "0.35€";

  constructor(private cookieService: CookieService) {
    this.matricula = cookieService.get('Matricula');
    this.calle = cookieService.get('Calle');
    this.color = cookieService.get('Color');
  }

  ngOnInit(): void {
  }

}
