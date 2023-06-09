import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import { Task } from '../task';
import { TaskService } from '../task-service.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  myForm: any;
  newTask: string = '';

   constructor(private taskService: TaskService) {

  }

  // onSubmit(task: Task) {
  //   console.info('getting data ' + task.title);
  //   //this.taskList.addToList(task)
  //   this.myForm.reset();

  // }

  addTask() {
    if (this.newTask.trim() !== '') {
      console.log(this.newTask);
      const newTaskObj = { title: this.newTask, done: false };
      this.taskService.addTask(newTaskObj);
      this.newTask = '';
    }
  }

}
