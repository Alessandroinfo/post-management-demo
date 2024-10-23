import {Component, inject, OnInit, signal} from '@angular/core';
import {Paginate, PaginatedPosts, PostCards} from '../../models';
import {RouterLink} from '@angular/router';
import {PostCardComponent} from './components/post-card/post-card.component';
import {PostsService} from '../../services/posts.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {PaginatorComponent} from './components/paginator/paginator.component';

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
  protected readonly Array = Array;

  postService = inject(PostsService);
  posts= signal<PostCards>([]);
  totalCount= signal<number>(0);

  paginate: Paginate = {limit: 9, page: 1};
  ngOnInit() {
    this.posts = this.postService.posts;
    this.totalCount = this.postService.totalCount;
    this.postService.getPaginatedPosts$(this.paginate);
  }

  selectPage(paginate: Paginate) {
    this.postService.getPaginatedPosts$(paginate);
  }
}
