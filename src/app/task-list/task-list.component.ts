import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { TaskService } from '../task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  tasks: Task[] = [];
  isDone: boolean = true;

  constructor(private taskService: TaskService) {
    this.tasks = taskService.tasks;
  }

  toggleColor(task: Task) {
    task.done = !task.done;
  }
  
  clearDoneTasks() {
    this.tasks = this.taskService.clearWhenDone();
  }
}
