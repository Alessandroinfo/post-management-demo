import {inject, Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {PostCards} from '../models';
import gql from 'graphql-tag';

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

  getPosts$() {
    return this.apollo.watchQuery<PostCards>({
      query: this.GET_POSTS_QUERY,
      variables: {
        paginate: {
          "page": 1,
          "limit": 5
        }
      }
    }).valueChanges
  }
}
