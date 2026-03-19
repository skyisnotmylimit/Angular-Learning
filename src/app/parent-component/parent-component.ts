import { Component,signal,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifecycleMethods } from "../lifecycle-methods/lifecycle-methods";
import { CapitalisePipe } from '../pipes/capitalise-pipe';
import { ChildComponent } from "../child-component/child-component";

@Component({
  selector: 'app-parent-component',
  imports: [FormsModule, LifecycleMethods, CapitalisePipe, ChildComponent],
  templateUrl: './parent-component.html',
  styleUrls: ['./parent-component.css'],
})
export class ParentComponent {
  count:number = 0;
  // inputToChild = signal<string>("");

  listNames = signal<string[]>([
    "Shubham",
    "Satyarth",
    "Satyarth2",
    "Satyarth3",
    "Priyam",
  ]);

}


