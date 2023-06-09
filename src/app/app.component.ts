import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <body>
    <div class="container">
      <h1>To-do list</h1>

      <app-task-list></app-task-list>
      </div>  
    </body>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todolist';
}
