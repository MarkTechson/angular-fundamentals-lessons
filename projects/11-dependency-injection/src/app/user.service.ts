import { data, User } from './data';

export class UserService {
  private userData: User[] = data;

  constructor() {}

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
