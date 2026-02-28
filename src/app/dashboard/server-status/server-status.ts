import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DashboardItem } from '../dashboard-item/dashboard-item';

@Component({
  selector: 'app-server-status',
  imports: [DashboardItem],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
  currentStatus:string = 'online';
}
