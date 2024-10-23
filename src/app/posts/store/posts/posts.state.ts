import {Action, Selector, State, StateContext} from '@ngxs/store';
import {GetPaginatedPosts, GetPost} from './posts.actions';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs';
import {Paginate, Post, PostCards} from '../../models';
import {PostsService} from '../../services/posts.service';

export interface PostsStateModel {
  posts: PostCards;
  post: Post | null;
  totalCount: number;
  paginate: Paginate;
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
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
        ctx.patchState({
          posts: result.posts,
          totalCount: result.totalCount,
          paginate: action.paginate
        });
      })
    );
  }

  @Action(GetPost)
  getPost(ctx: StateContext<PostsStateModel>, action: GetPost) {
    return this.postsService.getPost$(action.id).pipe(
      tap(result => {
        ctx.patchState({post: result});
      })
    );
  }
}
