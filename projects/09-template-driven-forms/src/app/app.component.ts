import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
        <input id="title" type="text" [(ngModel)]="title" />

        <label for="body">Post Body</label>
        <!-- add the textarea -->
        <textarea id="body" [(ngModel)]="body"></textarea>
      </section>
      <section>
        <p>Title: {{ title }}</p>
        <p>Body: {{ body }}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '';
  body = '';
}
