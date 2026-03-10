import { Component, signal } from '@angular/core';
import { CounterComponent } from "./counter-component/counter-component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-learning');
}
