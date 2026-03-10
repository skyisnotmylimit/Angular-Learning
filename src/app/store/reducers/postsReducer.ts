import { createReducer, on } from '@ngrx/store';
import { getPosts, getPostsSuccess, getPostsFailure } from '../actions/postsAction';

export interface PostsState {
  data: any[];
  loading: boolean;
  error: any;
}

export const initialState: PostsState = {
  data: [],
  loading: false,
  error: null
};

export const postsReducer = createReducer(
  initialState,
  on(getPosts, state => ({ ...state, loading: true, error: null })),
  on(getPostsSuccess, (state, { posts }) => ({ ...state, data: posts, loading: false })),
  on(getPostsFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
