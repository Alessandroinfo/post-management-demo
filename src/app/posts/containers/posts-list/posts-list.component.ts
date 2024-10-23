import {Component, inject, OnInit} from '@angular/core';
import {Paginate, PaginatedPosts} from '../../models';
import {RouterLink} from '@angular/router';
import {PostCardComponent} from './components/post-card/post-card.component';
import {PostsService} from '../../services/posts.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    RouterLink,
    PostCardComponent,
    AsyncPipe
  ],
  providers: [PostsService],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit{
  protected readonly Array = Array;

  postService = inject(PostsService);
  paginatedPosts$: Observable<PaginatedPosts> = new Observable<PaginatedPosts>();

  ngOnInit() {
    const paginate: Paginate = {
      page: 1,
      limit: 5
    }
    this.paginatedPosts$ = this.postService.getPaginatedPosts$(paginate);
  }

}
