import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgDigitWheelsComponent } from '../../projects/ng-digit-wheel/src/lib/ng-digit-wheels/ng-digit-wheels.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgDigitWheelsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
