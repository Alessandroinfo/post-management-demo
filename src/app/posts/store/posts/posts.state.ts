import {Action, Selector, State, StateContext} from '@ngxs/store';
import {CreatePost, GetPaginatedPosts, GetPost} from './posts.actions';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs';
import {Paginate, Post, PostCards} from '../../models';
import {PostsService} from '../../services/posts.service';

export interface PostsStateModel {
  posts: PostCards;
  localPosts: PostCards;
  post: Post | null;
  totalCount: number;
  paginate: Paginate;
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    localPosts: [],
    post: null,
    totalCount: 0,
    paginate: {limit: 9, page: 1},
  }
})
@Injectable()
export class PostsState {

  constructor(private postsService: PostsService) {
  }

  @Selector()
  static getPosts(state: PostsStateModel) {
    return state.posts;
  }

  @Selector()
  static getTotalCount(state: PostsStateModel) {
    return state.totalCount;
  }

  @Selector()
  static getPaginate(state: PostsStateModel) {
    return state.paginate;
  }

  @Selector()
  static getPost(state: PostsStateModel) {
    return state.post;
  }

  @Action(GetPaginatedPosts)
  getPaginatedPosts(ctx: StateContext<PostsStateModel>, action: GetPaginatedPosts) {
    return this.postsService.getPaginatedPosts$(action.paginate).pipe(
      tap(result => {
        const state = ctx.getState();

        ctx.patchState({
          posts: [...result.posts, ...state.localPosts],
          totalCount: result.totalCount,
          paginate: action.paginate
        });
      })
    );
  }

  @Action(GetPost)
  getPost(ctx: StateContext<PostsStateModel>, action: GetPost) {
    const state = ctx.getState();
    const found = state.localPosts.find(post => post.id === action.id);
    if (found) {
      return found;
    }

    return this.postsService.getPost$(action.id).pipe(
      tap(result => {
        ctx.patchState({post: result});
      })
    );
  }

  @Action(CreatePost)
  createPost(ctx: StateContext<PostsStateModel>, action: CreatePost) {
    const state = ctx.getState();
    const id = Math.random().toString();

    const newPost: Post = {
      id,  // Genera un ID temporaneo
      title: action.payload.title,
      body: action.payload.body,
      imageURL: `https://picsum.photos/1000/800?random=${id}`
    };

    ctx.patchState({
      localPosts: [...state.localPosts, newPost]
    });
  }
}
