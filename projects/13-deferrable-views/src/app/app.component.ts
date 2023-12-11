import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>

      @defer (on interaction(loadPosts)) {
      <app-posts />
      } @loading {
      <p>Loading Posts</p>
      } @placeholder {
      <p>Posts will load here</p>
      } @error {
      <p>Something went wrong 😬</p>
      }
    </section>
  `,
})
export class AppComponent {}
