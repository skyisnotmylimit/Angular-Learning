import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type PostType } from './post.model';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Post {
  private readonly httpClient = inject(HttpClient);

  getPosts(): Observable<PostType[]> {
    return this.httpClient
      .get<PostType[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(shareReplay(1));
  }
}
