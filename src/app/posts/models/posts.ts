export interface PostCard {
  id: string;
  title: string;
  imageURL: string;
}
export interface Post {
  id: string;
  title: string;
  body: string;
  imageURL: string;
}

export interface Paginate {
  page: number;
  limit: number;
}

export interface PaginatedPosts {
  posts: PostCards;
  totalCount: number;
}

export type PostCards = Array<PostCard>;
