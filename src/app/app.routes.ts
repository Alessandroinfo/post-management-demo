import {Routes} from '@angular/router';
import {PostsCreateComponent} from './posts/containers/posts-create/posts-create.component';
import {PostsListComponent} from './posts/containers/posts-list/posts-list.component';
import {PostComponent} from './posts/containers/post/post.component';

export const routes: Routes = [
  // Route to create a new post
  { path: 'create', component: PostsCreateComponent },

  // Route to display the list of posts
  { path: 'posts', component: PostsListComponent },

  // Route to display a specific post based on the ID parameter
  { path: 'post/:id', component: PostComponent },

  // Wildcard route: fallback to the posts list for any undefined routes
  { path: '**', component: PostsListComponent }
];
