import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppUser } from '../../users/user';

@Component({
  selector: 'app-profile-tab',
  imports: [],
  templateUrl: './profile-tab.html',
  styleUrl: './profile-tab.css',
})
export class ProfileTab {
 @Input() user: AppUser | null = null;
 @Output() tabClickEvent = new EventEmitter<number>();

  onTabClick(){
    if (!this.user) {
      return;
    }

    this.tabClickEvent.emit(this.user.id);
  }
}
