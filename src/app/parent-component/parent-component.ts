import { ChildComponent } from './../child-component/child-component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {

  displayChildData(data:string) {
    console.log("Data from child",data);
  }
}
