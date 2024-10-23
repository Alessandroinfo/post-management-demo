export class GetPost {
  static readonly type = '[Post] Get Post';
  constructor(public id: string) {}
}
