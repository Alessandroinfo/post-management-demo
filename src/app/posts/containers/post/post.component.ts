import {Component, inject, OnInit} from '@angular/core';
import {PostCardComponent} from '../posts-list/components/post-card/post-card.component';
import {Post} from '../../models';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AsyncPipe, JsonPipe, NgOptimizedImage} from '@angular/common';
import {GetPost} from '../../store/posts/posts.actions';
import {PostsState} from '../../store/posts/posts.state';

@Component({
  selector: 'app-post',
  standalone: true,
  // Declare the imports needed for this standalone component
  imports: [
    AsyncPipe,         // For handling async data (like observables) in the template
    RouterLink,        // Enables navigation between routes using Angular router
    PostCardComponent, // Component to display individual post details
    NgOptimizedImage,
    JsonPipe,
    // Optimized image directive for performance improvements
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  // Observable that holds the post data, fetched from the store
  post$: Observable<Post | null> = inject(Store).select(PostsState.getPost);

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Get the 'id' parameter from the route and dispatch an action to fetch the post details
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(new GetPost(id));
    }
  }
}
