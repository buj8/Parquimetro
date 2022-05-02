import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(private cookieService: CookieService) {
  }

  timerControl = new FormControl();
  currentTime = new Date();
  desiredTime : String = "";
  minTime = this.currentTime.getHours() + ":" + this.currentTime.getMinutes();
  maxTime = "21:00";
  zoneFactor = this.getZoneFactor();
  price = 0;
  
  getZoneFactor() {
    if(this.cookieService.get('Color')) {
      var colorZona = this.cookieService.get('Color');
      switch(colorZona) {
        case 'Verde': 
          return 0.02;
        case 'Azul':
          return 0.035;
        default: 
          return 0;
      }
    }
    return 0;
  }
  
  calculateTime(time_a: string[], time_b: string[]) {
    var hours_a: number = +time_a[0] *60;
    var mins_a: number = +time_a[1];
    var hours_b: number = +time_b[0] *60;
    var mins_b: number = +time_b[1];
    return(hours_b+mins_b-hours_a-mins_a);
    
  }

  onHourSelect(hourSelected: String) {
    this.desiredTime = hourSelected;
    this.price = this.calculateTime(this.minTime.split(":"), this.desiredTime.split(":")) * this.zoneFactor;
    this.cookieService.set('Fin', this.desiredTime+'');
    this.cookieService.set('Precio', this.price.toFixed(2)+' €');
    console.log(this.price);
  }

  ngOnInit(): void {
    this.cookieService.set('Inicio', this.minTime);
  }

}

