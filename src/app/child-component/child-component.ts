import { Component, input, output, Output, Input, EventEmitter, model, inject } from '@angular/core';
import { UserService } from '../services/user-service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-child-component',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  // @Output() countChange = new EventEmitter<number>();
  // @Input({
  //   required:true
  // }) count:number = 0;

  userService = inject(UserService);
  count = model<number>(0);
  users$ = this.userService.getAllUsers();

  onButtonClick(e: Event) {
    const target = e.target as HTMLButtonElement;
    if (target.id === "increment") {
      this.count.update((p)=>p+1);
    } else {
      this.count.update((p)=>p-1);
    }
  }
}
