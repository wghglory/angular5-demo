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
