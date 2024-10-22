import {Component} from '@angular/core';
import {PostCards} from './models';
import {RouterLink} from '@angular/router';
import {PostCardComponent} from './components/post-card/post-card.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    RouterLink,
    PostCardComponent
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {
  posts: PostCards = Array.from({length: 20}, (_, i) => ({
    id: Math.random().toString(),
    title: `Post Title ${i + 1}`,
    imageURL: `https://picsum.photos/300/200?random=${i + 1}`
  }));
}
