import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StreetComponent } from './street/street.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {MatButtonModule} from '@angular/material/button';
import { PayMethodComponent } from './pay-method/pay-method.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';
import { TimerComponent } from './timer/timer.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { ReceiptComponent } from './receipt/receipt.component';
import {MatListModule} from '@angular/material/list';

import {MatIconModule} from '@angular/material/icon';

import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    StreetComponent,
    PayMethodComponent,
    LicensePlateComponent,
    TimerComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    NgxMatTimepickerModule.setLocale('es-ES'), 
    MatIconModule,
    MatListModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
