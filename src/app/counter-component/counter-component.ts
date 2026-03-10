import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../store/actions/counterAction';
import { selectCounterValue } from '../store/selectors/counterSelector';
import { getPosts } from '../store/actions/postsAction';
import { AppState } from '../store/state/app';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-component',
  imports: [AsyncPipe],
  templateUrl: './counter-component.html',
  styleUrls: ['./counter-component.css'],
})
export class CounterComponent implements OnInit {
  counter$ = new Observable<number>();
  posts$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCounterValue);
    this.posts$ = this.store.select(state => state.posts.data);
    this.loading$ = this.store.select(state => state.posts.loading);
    this.error$ = this.store.select(state => state.posts.error);
  }

  ngOnInit() {
    this.store.dispatch(getPosts());
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
