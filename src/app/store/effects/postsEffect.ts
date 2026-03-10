import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import { getPosts, getPostsSuccess, getPostsFailure } from '../actions/postsAction';

export const loadPosts = createEffect(
  (actions$ = inject(Actions), http = inject(HttpClient)) => {
    return actions$.pipe(
      ofType(getPosts),
      mergeMap(() =>
        http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
          map((posts) => getPostsSuccess({ posts })),
          catchError((error) => of(getPostsFailure({ error: error.message })))
        )
      )
    );
  },
  { functional: true }
);
