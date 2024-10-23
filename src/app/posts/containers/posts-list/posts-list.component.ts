import {Component, inject, OnInit} from '@angular/core';
import {PostCards} from '../../models';
import {RouterLink} from '@angular/router';
import {PostCardComponent} from './components/post-card/post-card.component';
import {PostsService} from '../../services/posts.service';
import {Subject} from 'rxjs';
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

  postService = inject(PostsService);
  posts$: Subject<PostCards> = new Subject<PostCards>();

  ngOnInit() {
    this.postService.getPosts$().subscribe()
  }
}
