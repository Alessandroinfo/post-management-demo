import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PostCard} from '../../../../models';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  post = input<PostCard>();
}
