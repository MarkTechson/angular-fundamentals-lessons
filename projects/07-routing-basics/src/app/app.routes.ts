import { Routes } from '@angular/router';
import { GreetingsComponent } from './greetings.component';

export const routes: Routes = [
  {
    // add a default path to greetings component
    path: '',
    component: GreetingsComponent,
  },
];
