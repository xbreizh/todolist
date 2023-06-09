import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>To-do list</h1>

    <app-task-list></app-task-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'todolist';
}
