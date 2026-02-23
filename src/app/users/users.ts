import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { Card } from '../shared/card/card';
import { ProfileTab } from '../shared/profile-tab/profile-tab';
import { AppUser, User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrl: './users.css',
  imports:[SearchBar,Card,ProfileTab]
})
export class Users {
  readonly userData: AppUser[];
  selectedUser: AppUser | null;

  constructor(private user: User) {
    this.userData = this.user.getUsers();
    this.selectedUser = this.userData[0] ?? null;
  }

  onTabClick(id: number) {
    console.log('Selected id is', id);
    this.selectedUser = this.userData.find((user) => user.id === id) ?? null;
  }
}
