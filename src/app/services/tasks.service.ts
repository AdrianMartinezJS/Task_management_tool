import { Injectable } from '@angular/core';
import { TaskData } from '../Models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all about Angular',
      dueDate: '2024-30-06',
      completed: false,
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build a first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-30-07',
      completed: false,
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Build a second prototype',
      summary: 'Build a second prototype of the online shop website',
      dueDate: '2024-30-09',
      completed: false,
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'repare and describe an issue template which will help with project management',
      dueDate: '2024-30-08',
      completed: false,
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: TaskData, userId: string) {
    this.tasks.push({
      id: crypto.randomUUID(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      completed: false,
    });
    this.updateTasks();
  }

  completeTask(id: string) {
    let completedTask = this.tasks.find((task) => task.id === id);
    if (completedTask != undefined) {
      completedTask.completed = true;
    }
    this.updateTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.updateTasks();
  }

  restoreTask(id: string) {
    let completedTask = this.tasks.find((task) => task.id === id);
    if (completedTask != undefined) {
      completedTask.completed = false;
    }
    this.updateTasks();
  }

  private updateTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
