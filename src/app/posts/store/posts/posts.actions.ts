import {Paginate} from '../../models';

export class GetPaginatedPosts {
  static readonly type = '[Posts] Get Paginated Posts';
  constructor(public paginate: Paginate) {}
}

export class GetPost {
  static readonly type = '[Post] Get Post';

  constructor(public id: string) {
  }
}

export class CreatePost {
  static readonly type = '[Post] Create Post';

  constructor(public payload: { title: string; body: string }) {
  }
}
