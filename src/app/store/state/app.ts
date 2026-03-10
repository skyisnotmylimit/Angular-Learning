export interface AppState {
  counter: number;
  posts: {
    data: any[];
    loading: boolean;
    error: any;
  }
}
