import {inject, Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Paginate, PostResponse} from '../models';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apollo = inject(Apollo);

  GET_POSTS_QUERY = gql`
    query ($options: PageQueryOptions) {
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
        options: {
          paginate: paginate
        }
      }
    }).valueChanges.pipe(
      map(response => ({
        posts: response.data.posts.data.map(post => ({
          ...post,
          imageURL: `https://picsum.photos/300/200?random=${post.id}`
        })),
        totalCount: response.data.posts.meta.totalCount
      }))
    );
  }
}
