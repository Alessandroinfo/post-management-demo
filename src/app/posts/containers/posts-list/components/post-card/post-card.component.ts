import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Input} from 'postcss';
import {PostCard} from '../../models';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  post = input<PostCard>();
}
