# Form

1. `ng g c home` to create HomeComponent
1. update `app-routing.module.ts`

    ```diff
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    import { HomeComponent } from './home/home.component';

    const routes: Routes = [
    +  { path: '', redirectTo: 'home', pathMatch: 'full' },
    +  { path: 'home', component: HomeComponent }
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule {}
    ```

1. app.module.ts add: `import { FormsModule } from '@angular/forms';`
1. home.component.ts:

    ```html
    <h3>Angular 5 Forms</h3>
    <form #form="ngForm" novalidate>
        <input type="text" required name="name" [(ngModel)]="name">
        <!-- <input type="text" required name="name" ngModel> -->
        <button type="submit">Ok</button>
    </form>

    <p>form.pristine（从未填写过数据，可能 focus 但就是没写过数据）: {{ form.pristine }}</p>
    <p>form.dirty: {{ form.dirty }}</p>
    <hr>
    <p>form.touched（鼠标曾经 focus 过，在 blur 时候为 true）: {{ form.touched }}</p>
    <p>form.untouched: {{ form.untouched }}</p>
    <hr>
    <p>form.valid（required 等通过）: {{ form.valid }}</p>
    <p>form.invalid: {{ form.invalid }}</p>
    ```