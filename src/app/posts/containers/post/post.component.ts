import {Component, inject, OnInit} from '@angular/core';
import {PostCardComponent} from '../posts-list/components/post-card/post-card.component';
import {Post} from '../../models';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {GetPost} from '../../store/posts/posts.actions';
import {PostsState} from '../../store/posts/posts.state';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    PostCardComponent,
    NgOptimizedImage
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  post$: Observable<Post | null> = inject(Store).select(PostsState.getPost);

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(new GetPost(id));
    }
  }
}
