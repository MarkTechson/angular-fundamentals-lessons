import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Masters of Puppets</li>
      <li>Cool Nights and Company</li>
      <li>In Shallow Seas We Sail</li>
    </ol>
  `,
  styles: ``,
})
export class AppComponent {}
