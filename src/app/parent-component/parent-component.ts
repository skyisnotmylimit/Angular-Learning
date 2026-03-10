import { Component,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifecycleMethods } from "../lifecycle-methods/lifecycle-methods";
import { CapitalisePipe } from '../pipes/capitalise-pipe';

@Component({
  selector: 'app-parent-component',
  imports: [FormsModule, LifecycleMethods, CapitalisePipe],
  templateUrl: './parent-component.html',
  styleUrls: ['./parent-component.css'],
})
export class ParentComponent {
  inputString = signal<string>("");
  inputToChild = signal<string>("");

  listNames = signal<string[]>([
    "Shubham",
    "Satyarth",
    "Satyarth2",
    "Satyarth3",
    "Priyam",
  ]);

  onButtonClick() {
    this.inputToChild.set(this.inputString());
  }
}


