import { Component, signal } from '@angular/core';
import { ParentComponent } from './parent-component/parent-component';
import { DictionaryComponent } from "./dictionary-component/dictionary-component";

@Component({
  selector: 'app-root',
  imports: [ParentComponent, DictionaryComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-learning');
}
