import { Injectable } from '@angular/core';
import { TaskAdded } from './new-task/taskAdded.model';
import { Tasks } from './tasks.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  saveOnLocalStorage(tasks: Tasks[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  userTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveOnLocalStorage(this.tasks);
  }
  addTask(taskData: TaskAdded, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      userId: userId,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveOnLocalStorage(this.tasks);
  }
}
