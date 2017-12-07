# Template-driven Form validation

component:

```ts
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Employee } from './../models/employ';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  languages = ['English', 'Spanish', 'Other'];

  model = new Employee('', '', false, '', 'default');
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(value) {
    if (value === 'default') this.hasPrimaryLanguageError = true;
    else this.hasPrimaryLanguageError = false;
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  save(employeeForm: NgForm) {
    //post request
    console.log(employeeForm);
    console.log('saved: ' + JSON.stringify(employeeForm.value));
  }

  ngOnInit() {}
}
```

## Html control level validation

### input validation

```html
<form #employeeForm="ngForm" novalidate (ngSubmit)="save(employeeForm)">

  <!-- <div class="form-group" [class.has-error]="firstName.invalid && firstName.touched"> -->
  <div class="form-group" [ngClass]="{'has-error': firstName.invalid && (firstName.touched || firstName.dirty)}">
    <label class="control-label">First Name</label>
    <input #firstName="ngModel" pattern="...+"  required type="text" class="form-control" name="firstName" [(ngModel)]="model.firstName">
    <div *ngIf="firstName.invalid && (firstName.touched || firstName.dirty)" class="alert alert-danger">
      <span *ngIf="firstName.errors.required">First Name is required</span>
      <span *ngIf="firstName.errors.pattern">and must be at least 3 characters.</span>
    </div>
  </div>
</form>
```

### select validation

We will get an error in following cases:

1. When blurring with default selection
1. Changing back to default

```html
<form #employeeForm="ngForm" novalidate (ngSubmit)="save(employeeForm)">

  <!-- <div class="form-group" [class.has-error]="hasPrimaryLanguageError"> -->
  <div class="form-group" [ngClass]="{'has-error': hasPrimaryLanguageError}">
    <label class="control-label">Primary Language</label>
    <select class="form-control" #primaryLanguage name="primaryLanguage" (blur)="validatePrimaryLanguage(primaryLanguage.value)"
      (change)="validatePrimaryLanguage(primaryLanguage.value)" [(ngModel)]="model.primaryLanguage">
      <option value="default">Select a Language...</option>
      <option *ngFor="let lang of languages">
        {{ lang }}
      </option>
    </select>
  </div>
</form>
```

## Form submit level

```html
<button class="btn btn-primary" type="submit" [disabled]="employeeForm.invalid">Ok</button>
```

User types first name and last name, then he directly clicks "submit" without touching select control, we should also validate this in submit level.

So only when select control have values other than "default", its form validation can be passed.

```html
<button class="btn btn-primary" type="submit" [disabled]="employeeForm.invalid || primaryLanguage.value==='default'">Ok</button>
```