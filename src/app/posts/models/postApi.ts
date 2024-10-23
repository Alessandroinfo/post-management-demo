import {PostCards} from './posts';

export interface PostResponse {
  posts: {
    data: PostCards;
    meta: {
      totalCount: number;
    }
  }
}
