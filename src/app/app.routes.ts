import {Routes} from '@angular/router';
import {PostsCreateComponent} from './posts/containers/posts-create/posts-create.component';
import {PostsListComponent} from './posts/containers/posts-list/posts-list.component';
import {PostComponent} from './posts/containers/post/post.component';

export const routes: Routes = [
  { path: 'create', component: PostsCreateComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'post/:id', component: PostComponent},
  { path: '**', component: PostsListComponent }
];
