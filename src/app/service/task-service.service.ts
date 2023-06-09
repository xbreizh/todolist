import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {title: 'Walk the walk', done: false},
    {title: 'Talk the talk', done: true}
  ];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  clearWhenDone() {
    this.tasks = this.tasks.filter(task => !task.done);
    return this.tasks;
  }
}
