import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  private tasksService = inject(TasksService); // Se puede hacer así o con el constructor

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
