import {inject, Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {gql} from 'graphql-tag';
import {Post} from '../models';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apollo = inject(Apollo);

  GET_POST_QUERY = gql`
    query ($id: ID!) {
      post(id: $id) {
        id
        title
        body
      }
    }
  `;

  getPost$(id: string): Observable<Post> {
    return this.apollo.watchQuery<{ post: Post }>({
      query: this.GET_POST_QUERY,
      variables: {id}
    }).valueChanges.pipe(
      map(response => {
        return {...response.data.post, imageURL: `https://picsum.photos/1000/800?random=${response.data.post.id}`};
      })
    );
  }
}
