import { Component } from '@angular/core';
import { AccountInfo } from './account-info';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article class="card">
      <h1 class="card-title">Frontend Masters Express</h1>
      <p class="card-number">0000 0000 0000 0000</p>
      <section class="membership-info">
        <p>
          <!-- name -->
          {{ '' }}
        </p>
        <p>Valid Thru: {{ '' }}</p>
        <p>CVV: {{ '' }}</p>
        <p>
          <!-- membership status -->
          <span class="badge gold">Gold</span>
          <span class="badge platinum">Platinum</span>
          <span class="badge silver">Silver</span>
        </p>
      </section>
    </article>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  account: AccountInfo = {
    name: 'Melisa Evan',
    membershipStatus: 'gold',
    validThru: '12/2022',
    CVV: '123',
  };
}
