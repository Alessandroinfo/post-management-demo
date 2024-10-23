import {Action, Selector, State, StateContext} from '@ngxs/store';
import {GetPaginatedPosts} from './posts.actions';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs';
import {Paginate, PostCards} from '../../models';
import {PostsService} from '../../services/posts.service';

export interface PostsStateModel {
  posts: PostCards;
  totalCount: number;
  paginate: Paginate;
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
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

  @Action(GetPaginatedPosts)
  getPaginatedPosts(ctx: StateContext<PostsStateModel>, action: GetPaginatedPosts) {
    const state = ctx.getState();
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
}
