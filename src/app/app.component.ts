import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal(DUMMY_USERS);
  selectedUserId!: string;
  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
  get selectedUser() {
    return this.users().find((user) => user.id === this.selectedUserId)!;
  }
}
