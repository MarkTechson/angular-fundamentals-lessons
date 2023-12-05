import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->

        <label for="body">Post Body</label>
        <!-- add the textarea -->
      </section>
      <!-- <section>
        <p>Display title</p>
        <p>Display value</p>
      </section> -->
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';
}
