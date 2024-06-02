import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, AddtaskComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
