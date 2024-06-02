import { TasksService } from './../../services/tasks.service';
import { Component, Input } from '@angular/core';
import { Task } from '../../Models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  constructor(private tasksService: TasksService) {}

  completeTask() {
    this.tasksService.completeTask(this.task.id);
  }

  removeTask() {
    this.tasksService.removeTask(this.task.id);
  }

  restoreTask() {
    this.tasksService.restoreTask(this.task.id);
  }
}
