import { Component } from '@angular/core';
import { TaskService } from '../service/task-service.service';

@Component({
  selector: 'app-task-form',
  template: `
    <form (ngSubmit)="addTask()">
      <input type="text" [(ngModel)]="newTask" name="newTaskInput" placeholder="Enter new task">
      <button type="submit">Add Task</button>
    </form>
  `,
  styles: []
})
export class TaskFormComponent {

  myForm: any;
  newTask: string = '';

  constructor(private taskService: TaskService) {

  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTaskObj = { title: this.newTask, done: false };
      this.taskService.addTask(newTaskObj);
      this.newTask = '';
    }
  }

}
