# 3rd party control

```bash
yarn add ngx-bootstrap
```

## TimePicker, DatePicker, ToggleButton, RadioButton, Rating

add css into styles.scss:

```scss
@import '~ngx-bootstrap/datepicker/bs-datepicker.css';
```

Register Module in app.module.ts:

```diff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

+ import { BsDatepickerModule, TimepickerModule, ButtonsModule, RatingModule } from 'ngx-bootstrap';

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
+   BsDatepickerModule.forRoot(),
+   TimepickerModule.forRoot(),
+   ButtonsModule.forRoot(),
+   RatingModule.forRoot()
  ],
  providers: [FormPosterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```html
<div class="container">
  <h3>Angular 5 3rd Party Controls</h3>
  <form>

    <div class="form-group">
      <button type="button" class="btn" [ngClass]="{'btn-primary': onOffSwitch === 'On'}" name="onOffSwitch" [(ngModel)]="onOffSwitch"
        btnCheckbox btnCheckboxTrue="On" btnCheckboxFalse="Off">
        {{ onOffSwitch }}
      </button>
    </div>

    <div class="btn-group">
      <label class="btn btn-primary" name="taxType" [(ngModel)]="taxType" btnRadio="W2">
        Type W2
      </label>
      <label class="btn btn-primary" name="taxType" [(ngModel)]="taxType" btnRadio="1099">
        Type 1099
      </label>
      <label class="btn btn-primary" name="taxType" [(ngModel)]="taxType" btnRadio="Other">
        Other Type
      </label>
    </div>
    <h3>{{ taxType }}</h3>

    <div class="form-group">
      <timepicker name="startTime" [(ngModel)]="startTime" [minuteStep]="15">
      </timepicker>
    </div>

    <div class="form-group" style="display: inline-block;">
      <input type="text" class="form-control" [minDate]="minDate" [maxDate]="maxDate" #dp="bsDatepicker" bsDatepicker [(bsValue)]="bsValue">
    </div>

    <div class="form-group">
      <rating name="postRating" [(ngModel)]="postRating" [max]="10" (onHover)="hover($event)" (onLeave)="leave($event)">
      </rating>
    </div>
    <h3>{{ postRating }}</h3>

  </form>
</div>
```

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  constructor() {}

  // DatePicker
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  // TimePicker
  startTime = new Date('Oct 1 2016 3:00 PM');

  // btnCheckbox
  onOffSwitch = 'Off';

  // RadioButton
  taxType = 'W2';

  // Rating
  postRating = 5;
  hover(value) {
    console.log('hover: ' + value);
  }

  leave(value) {
    console.log('leave: ' + value);
  }
  ngOnInit() {}
}
```

## reference

<https://valor-software.com/ngx-bootstrap/>