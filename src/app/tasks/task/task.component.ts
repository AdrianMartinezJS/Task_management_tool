import { TasksService } from './../../services/tasks.service';
import { Component, Input } from '@angular/core';
import { Task } from '../../Models/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe, NgIf],
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
