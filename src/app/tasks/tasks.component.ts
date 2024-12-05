import { Component, inject, input, OnChanges } from '@angular/core';

import { User } from '../user/user.model';
import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  tasksService = inject(TasksService);
  isVisible = false;
  onStartAddTask() {
    this.isVisible = true;
  }
  onCloseAddTask() {
    this.isVisible = false;
  }
  get userTasks() {
    return this.tasksService.userTasks(this.user().id);
  }
  // constructor(private tasksService: TasksService) {}
  // userTasks = this.tasksService.userTasks(this.user().id);
  // ngOnChanges() {
  //   console.log(this.tasksService.userTasks(this.user().id))
  // }
}
