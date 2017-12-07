# Data binding

## input

component:

```ts
export class HomeComponent implements OnInit {
  readonly model = new Employee('Darla', 'Smith');

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }
}
```

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