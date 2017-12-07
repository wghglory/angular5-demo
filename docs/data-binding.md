# Data binding

component:

```ts
export class HomeComponent implements OnInit {
  readonly model = new Employee('Darla', 'Smith', true, 'w2', 'English');

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }
}
```

## input

### No binding

```html
<input type="text" class="form-control" required name="lastName" ngModel>
```

### 1-way binding (Model to UI)

```html
<input type="text" class="form-control" required name="lastName" [ngModel]="model.lastName">
```

### 2-way binding

```html
<!-- seldom used -->
<input type="text" class="form-control" required name="firstName" [ngModel]="model.firstName" (ngModelChange)="model.firstName=$event">

<!-- common used -->
<input type="text" class="form-control" required name="name" [(ngModel)]="model.firstName">
```

Below is used if UI value is a little different from model. e.g, Capitalize first letter for the model.

```html
<input type="text" class="form-control" required name="firstName" [ngModel]="model.firstName" (ngModelChange)="firstNameToUpperCase($event)">
```

## Checkbox

```html
<input type="checkbox" name="isFullTime" [(ngModel)]="model.isFullTime"> Full Time Employee
```

## Radio button

```html
<input type="radio" name="paymentType" value="w2" checked [(ngModel)]="model.paymentType"> W2

<input type="radio" name="paymentType" value="1099" [(ngModel)]="model.paymentType"> 1099
```

## Select

```html
<select class="form-control" name="primaryLanguage" [(ngModel)]="model.primaryLanguage">
  <option *ngFor="let lang of languages">
    {{ lang }}
  </option>
</select>
```