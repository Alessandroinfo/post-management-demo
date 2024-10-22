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

export type PostCards = Array<PostCard>;
