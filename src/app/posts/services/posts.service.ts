import {DestroyRef, inject, Injectable, signal} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Paginate, PostCards, PostResponse} from '../models';
import gql from 'graphql-tag';
import {map, take} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  readonly destroyRef = inject(DestroyRef);

  posts = signal<PostCards>([]);
  totalCount = signal<number>(0);

  apollo = inject(Apollo);

  GET_POSTS_QUERY = gql`
    query (
      $options: PageQueryOptions
    ) {
      posts(options: $options) {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
    }
  `;

  getPaginatedPosts$(paginate: Paginate) {
    return this.apollo.watchQuery<PostResponse>({
      query: this.GET_POSTS_QUERY,
      variables: {
        "options": {
          "paginate": paginate
        }
      }
    }).valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef),
      map(response => {
      const posts = response.data.posts.data.map((post, i) => {
        return {...post, imageURL: `https://picsum.photos/300/200?random=${post.id}`}
      });
      const totalCount = response.data.posts.meta.totalCount;
      this.posts.set(posts);
      this.totalCount.set(totalCount);
    })).subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
  }
}
