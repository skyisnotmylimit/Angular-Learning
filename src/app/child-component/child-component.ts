import { Component,Output,EventEmitter,output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  // @Output() clickFromChild = new EventEmitter<string>();
  clickFromChild = output<string>();
  data:string = "Shared from child";
  onButtonClick() {
    this.clickFromChild.emit(this.data);
  }
}
