import { Component, inject } from '@angular/core';
import { User } from './data';
import { UserService } from './user.service';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: `
    <h1>User Listing</h1>
    @for(userEntry of userData; track userEntry.id){
    <app-user-info [user]="userEntry" />
    }
  `,
})
export class AppComponent {
  userService = inject(UserService);
  userData: User[] = [];

  constructor() {
    this.userService.getUserData().then((data) => {
      this.userData = data;
    });
  }
}
