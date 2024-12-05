import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  close = output<void>();
  userId = input.required<string>();
  onClose() {
    this.close.emit();
  }
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredTime = signal('');
  taskService = inject(TasksService);
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredTime(),
      },
      this.userId()
    );
    this.onClose();
  }
}
