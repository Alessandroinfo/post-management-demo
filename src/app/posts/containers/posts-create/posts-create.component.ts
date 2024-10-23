import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {CreatePost} from '../../store/posts/posts.actions';

@Component({
  selector: 'app-posts-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './posts-create.component.html',
  styleUrl: './posts-create.component.scss'
})
export class PostsCreateComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.postForm = this.fb.group({
      title: [''],
      body: ['']
    });
  }

  onSubmit() {
    const {title, body} = this.postForm.value;
    this.store.dispatch(new CreatePost({title, body})).subscribe(() => {
      // Navigate to posts list or show success message
      this.router.navigate(['/posts']);
    });
  }
}
