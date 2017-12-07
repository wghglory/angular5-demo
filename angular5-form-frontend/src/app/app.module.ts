import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { BsDatepickerModule, TimepickerModule, ButtonsModule, RatingModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormPosterService } from './services/form-poster.service';
import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ControlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [FormPosterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
