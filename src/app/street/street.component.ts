import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


import streets from '../../assets/json/nombres_calles.json'
import colores from '../../assets/json/new_calles.json'

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.scss']
})
export class StreetComponent implements OnInit{

  constructor(private cookieService: CookieService) {
  }

  acStreets = new FormControl();
  options: string[] = streets;
  filteredOptions: Observable<string[]> | undefined;
  color: string = "no seleccionada";
  color_style: string = "black";

  ngOnInit() {
    this.filteredOptions = this.acStreets.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if(colores[value as keyof typeof colores]) {
      console.log(colores[value as keyof typeof colores]);
      this.color = colores[value as keyof typeof colores];
      this.cookieService.set('Calle', value);
      this.cookieService.set('Color', this.color);
      switch(this.color) { 
        case "Verde": { 
          this.color_style = "green";
          break; 
        } 
        case "Azul": { 
          this.color_style = "cyan";
          break; 
        } 
        case "Rojo": { 
          this.color_style = "darkred";
          break; 
      } 
        default: { 
          this.color_style = "red";
          break; 
        } 
    } 
    }
    return this.options.filter(option => option.toLowerCase().includes(filterValue)) ;
  }


}
