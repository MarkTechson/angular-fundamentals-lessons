import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>

    
  `,
  styles: [],
})
export class AppComponent {
  
  updateTodo(todo: Todo) {}
}
