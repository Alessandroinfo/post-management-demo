import {Component, inject, OnInit} from '@angular/core';
import {Paginate, PostCards} from '../../models';
import {RouterLink} from '@angular/router';
import {PostCardComponent} from './components/post-card/post-card.component';
import {PostsService} from '../../services/posts.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {Store} from '@ngxs/store';
import {GetPaginatedPosts} from '../../store/posts.actions';
import {PostsState} from '../../store/posts.state';

@Component({
  selector: 'app-posts-list',
  standalone: true,
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
export class PostsListComponent implements OnInit{
  posts$: Observable<PostCards> = inject(Store).select(PostsState.getPosts);
  totalCount$: Observable<number> = inject(Store).select(PostsState.getTotalCount);

  protected readonly Array = Array;

  paginate: Paginate = {limit: 9, page: 1};

  constructor(private store: Store) {
  }
  ngOnInit() {
    this.store.dispatch(new GetPaginatedPosts(this.paginate));

  }

  selectPage(paginate: Paginate) {
    this.store.dispatch(new GetPaginatedPosts(paginate));
  }
}
