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
  minTime = this.currentTime.getHours() + ":" + this.currentTime.getMinutes();
  maxTime = "20:00";
  price = 0;
  
  
  calculateTime(time_a: string[], time_b: string[]) {
    var hours_a: number = +time_a[0] *60;
    var mins_a: number = +time_a[1];
    var hours_b: number = +time_b[0] *60;
    var mins_b: number = +time_b[1];
    return(hours_a+mins_a-hours_b-mins_b);
    
  }

  ngOnInit(): void {
    this.cookieService.set('Inicio', this.minTime);
    this.timerControl.valueChanges.subscribe(selectedTime => 
      console.log(selectedTime));
      
  }

  

}

