import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {CreatePost} from '../../store/posts/posts.actions';

@Component({
  selector: 'app-posts-create',
  standalone: true,
  // Import ReactiveFormsModule for form handling
  imports: [ReactiveFormsModule],
  templateUrl: './posts-create.component.html',
  styleUrl: './posts-create.component.scss'
})
export class PostsCreateComponent {
  // Define the form group to manage the post creation form
  postForm: FormGroup;

  // Inject FormBuilder, Store for state management, and Router for navigation
  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    // Initialize the form with controls for title and body
    this.postForm = this.fb.group({
      title: [''],
      body: ['']
    });
  }

  // Method to handle form submission
  onSubmit() {
    const {title, body} = this.postForm.value; // Get form values
    // Dispatch the CreatePost action with form data and subscribe to handle post-creation logic
    this.store.dispatch(new CreatePost({title, body})).subscribe(() => {
      // Navigate back to the posts list upon successful creation
      this.router.navigate(['/posts']);
    });
  }
}
