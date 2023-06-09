import { Component } from '@angular/core';
import { TaskService } from '../service/task-service.service';

@Component({
  selector: 'app-task-form',
  template: `
    <form (ngSubmit)="addTask()" class="mb-3">
      <input type="text" [(ngModel)]="newTask" name="newTaskInput" placeholder="Enter new task" class="form-label"><br>
      <button type="submit" class="btn btn-primary">Add Task</button>
    </form>
  `,
  styles: [`
      ::placeholder {
      text-align: center; 
    }
  `]
})
export class TaskFormComponent {

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
