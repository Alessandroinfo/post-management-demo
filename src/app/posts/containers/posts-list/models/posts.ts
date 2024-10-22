export interface PostCard {
  id: string;
  title: string;
  imageURL: string;
}
export interface Post {
  id: string;
  title: string;
  description: string;
  imageURL: string;
}

export type Posts = Array<Post>;
export type PostCards = Array<PostCard>;
