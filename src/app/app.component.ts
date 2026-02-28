import { Component } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Traffic } from './dashboard/traffic/traffic';
import { Tickets } from './dashboard/tickets/tickets';
import { ParentComponent } from "./parent-component/parent-component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ServerStatus, Traffic, Tickets, ParentComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
