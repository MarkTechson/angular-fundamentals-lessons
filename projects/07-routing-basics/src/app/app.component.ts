import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>Enable routing to see the greeting below</h1> `,
  styles: [],
})
export class AppComponent {
  title = '07-routing-basics';
}
