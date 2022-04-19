import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicensePlateComponent } from './license-plate/license-plate.component';
import { PayMethodComponent } from './pay-method/pay-method.component';
import { StreetComponent } from './street/street.component';

const routes: Routes = [
  {path: '', component: LicensePlateComponent},
  {path: 'payment', component: PayMethodComponent},
  {path: 'street', component: StreetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
