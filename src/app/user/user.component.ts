import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
} from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  action = input.required<boolean>();
  selectedUser = output<string>();
  onSelectedUser() {
    this.selectedUser.emit(this.user().id);
  }
}
