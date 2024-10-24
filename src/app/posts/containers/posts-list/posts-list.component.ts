import {Component, inject, OnInit} from '@angular/core';
import {Paginate, PostCards} from '../../models';
import {RouterLink} from '@angular/router';
import {PostCardComponent} from './components/post-card/post-card.component';
import {PostsService} from '../../services/posts.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {Store} from '@ngxs/store';
import {GetPaginatedPosts} from '../../store/posts/posts.actions';
import {PostsState} from '../../store/posts/posts.state';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  // Import necessary modules and components
  imports: [
    RouterLink,
    PostCardComponent,
    AsyncPipe,
    PaginatorComponent
  ],
  providers: [PostsService],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {
  // Observables for posts and total count from NGXS state
  posts$: Observable<PostCards> = inject(Store).select(PostsState.getPosts);
  totalCount$: Observable<number> = inject(Store).select(PostsState.getTotalCount);

  protected readonly Array = Array;

  paginate: Paginate = {limit: 9, page: 1};

  constructor(private store: Store) {}

  // Dispatch action to load paginated posts
  ngOnInit() {
    this.store.dispatch(new GetPaginatedPosts(this.paginate));
  }

  // Dispatch action when page is selected
  selectPage(paginate: Paginate) {
    this.store.dispatch(new GetPaginatedPosts(paginate));
  }
}
