# Service

`ng g s services/form-poster -m app.module`

Don't forget to add service into module's providers array.

> import HttpModule or HttpClientModule in app.module

service.ts:

```typescript
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormPosterService {
  constructor(private http: Http) {}

  private extractData(res: Response) {
    let body = res.json();
    return body.fields || {};
  }

  private extractLanguages(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    console.error('observable error: ', error);
    return Observable.throw(error.statusText);
  }

  getLanguages(): Observable<any> {
    return this.http
      .get('http://localhost:3100/getlanguages')
      .delay(2000)
      .map(this.extractLanguages)
      .catch(this.handleError);
  }

  postEmployeeForm(employee: Employee): Observable<any> {
    let body = JSON.stringify(employee);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post('http://localhost:3100/postemployee', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
```

component calling the service:

```typescript
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './../models/employee';

import { FormPosterService } from './../services/form-poster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private formPosterService: FormPosterService) {
    this.formPosterService
      .getLanguages()
      .subscribe(
        (data) => (this.languages = data.languages),
        (err) => console.log('get error: ', err)
      );
  }

  submitForm(form: NgForm) {
    // validate form
    //post request
    // console.log(form);
    // console.log('saved: ' + JSON.stringify(form.value));

    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) return;

    this.formPosterService
      .postEmployeeForm(this.model)
      .subscribe((data) => console.log('success: ', data), (err) => console.log('error: ', err));
  }

  languages = [];

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

  ngOnInit() {}
}
```