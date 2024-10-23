import {Paginate} from '../../models';

export class GetPaginatedPosts {
  static readonly type = '[Posts] Get Paginated Posts';
  constructor(public paginate: Paginate) {}
}
