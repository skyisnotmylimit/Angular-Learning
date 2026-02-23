import { Component } from '@angular/core';
import {type AppUser } from '../../users/user';
import { Input } from '@angular/core';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() user: AppUser | null = null;
  
}
