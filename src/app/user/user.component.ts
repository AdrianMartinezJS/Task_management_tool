//! Como se hacía hasta ahora
// import { Component } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   selectedUser = DUMMY_USERS[0];

//   get userImage() {
//     return 'assets/users/' + this.selectedUser.avatar;
//   }

//   get userName() {
//     return this.selectedUser.name;
//   }

//   onSelectUser() {
//     console.log('clicked!');
//   }
// }

//! Con signals
// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   userImage = computed(() => 'assets/users/' + this.selectedUser().avatar);
//   userName = computed(() => this.selectedUser().name);

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

// Como se hacía hasta ahora usando Inputs
// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   @Input({ required: true }) avatar!: string;
//   @Input({ required: true }) name!: string;

//   get userName(): string {
//     return this.name;
//   }

//   get userImage(): string {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {}
// }

//! usando inputs y signals
// import { Component, input } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   avatar = input.required<string>();
//   name = input.required<string>();

//   userImage = computed(() => {
//     return 'assets/users/' + this.avatar();
//   });

//   onSelectUser() {}
// }

// Como se hace hasta ahora
// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   @Input({ required: true }) id!: string;
//   @Input({ required: true }) avatar!: string;
//   @Input({ required: true }) name!: string;
//   @Output() onSelect = new EventEmitter<string>();

//   get userName(): string {
//     return this.name;
//   }

//   get userImage(): string {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {
//     this.onSelect.emit(this.id);
//   }
// }

// Con Output function
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserModel;
  @Input({ required: true }) selected!: boolean;
  @Output() onSelect = new EventEmitter<string>(); // sigue siendo un EventEmitter

  get userName(): string {
    return this.user.name;
  }

  get userImage(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.onSelect.emit(this.user.id);
  }
}
