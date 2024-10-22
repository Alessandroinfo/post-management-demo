import { Routes } from '@angular/router';
import {PostsCreateComponent} from './posts/containers/posts-create/posts-create.component';
import {PostsListComponent} from './posts/containers/posts-list/posts-list.component';

export const routes: Routes = [
  { path: 'create', component: PostsCreateComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts:id', component: PostsListComponent },
  { path: '**', component: PostsListComponent }
];
