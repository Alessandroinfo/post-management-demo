import {inject, Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Paginate, PaginatedPosts, PostResponse} from '../models';
import gql from 'graphql-tag';
import {map} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

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
    }).valueChanges.pipe(map(response => {
      const posts = response.data.posts.data.map((post, i) => {
        return {...post, imageURL: `https://picsum.photos/300/200?random=${i + 1}`}
      });
      const totalCount = response.data.posts.meta.totalCount;
      return {posts, totalCount};
    }))
  }
}
