import {DestroyRef, inject, Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {Paginate, Post, PostResponse} from '../models';
import {map, Observable} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  readonly destroyRef = inject(DestroyRef);

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
      takeUntilDestroyed(this.destroyRef),
      map(response => ({
        posts: response.data.posts.data.map(post => ({
          ...post,
          imageURL: `https://picsum.photos/1000/800?random=${post.id}`
        })),
        totalCount: response.data.posts.meta.totalCount
      }))
    );
  }

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
      takeUntilDestroyed(this.destroyRef),
      map(response => {
        return {...response.data.post, imageURL: `https://picsum.photos/1000/800?random=${response.data.post.id}`};
      })
    );
  }

  CREATE_POST_MUTATION = gql`
    mutation ($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `;

  createPost$(input: { title: string; body: string }): Observable<Post> {
    return this.apollo.mutate<{ createPost: Post }>({
      mutation: this.CREATE_POST_MUTATION,
      variables: {input}
    }).pipe(
      takeUntilDestroyed(this.destroyRef),
      map(response => response.data?.createPost as Post)
    );
  }
}
