import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Post } from '../services/postService/post';
import { PostType } from '../services/postService/post.model';
@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  private readonly postService = inject(Post);
  private readonly initialPosts: PostType[] = [];

  currentPost = toSignal(this.postService.getPosts(), {
    initialValue: this.initialPosts,
  });
}
