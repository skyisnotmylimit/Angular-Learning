import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  imports: [],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.css',
})
export class MyProfile implements OnInit {
  constructor(private route:ActivatedRoute) {}
  userName: string = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userName = paramMap.get('userName') ?? '';
    });
  }
}
