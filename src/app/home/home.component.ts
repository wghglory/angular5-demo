import { Component, OnInit } from '@angular/core';

import { Employee } from './../models/employ';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  name: string; // [(ngModel)] needs it

  languages = ['English', 'Spanish', 'Other'];

  readonly model = new Employee('Darla', 'Smith');

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  ngOnInit() {}
}
