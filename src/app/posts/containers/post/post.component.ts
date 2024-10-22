import {Component, input} from '@angular/core';
import {PostCardComponent} from '../posts-list/components/post-card/post-card.component';
import {Post} from '../../models';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    RouterLink,
    PostCardComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post = input<Post>({
    id: Math.random().toString(),
    title: "Exploring the Mountains",
    body: "Discover the beauty of the highlands with our latest adventure tips and hiking routes.",
    imageURL: `https://picsum.photos/300/200?random=${1}`
  });
}
