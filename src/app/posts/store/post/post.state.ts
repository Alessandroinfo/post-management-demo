import {Action, Selector, State, StateContext} from '@ngxs/store';
import {GetPost} from './post.actions';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs';
import {Post} from '../../models';
import {PostService} from '../../services/post.service';

export interface PostStateModel {
  post: Post | null;
}

@State<PostStateModel>({
  name: 'post',
  defaults: {
    post: null,
  }
})
@Injectable()
export class PostState {

  constructor(private postService: PostService) {
  }

  @Selector()
  static getPost(state: PostStateModel) {
    return state.post;
  }

  @Action(GetPost)
  getPost(ctx: StateContext<PostStateModel>, action: GetPost) {
    return this.postService.getPost$(action.id).pipe(
      tap(result => {
        ctx.patchState({post: result});
      })
    );
  }
}
