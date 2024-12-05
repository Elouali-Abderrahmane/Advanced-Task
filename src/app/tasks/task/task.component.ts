import { Component, inject, input } from '@angular/core';
import { TaskData } from './taskData.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<TaskData>();
  taskService = inject(TasksService);
}
