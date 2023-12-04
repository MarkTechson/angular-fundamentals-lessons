import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container">
      <!-- This article element represents and entire listing -->
      <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title"><!-- car make and model--></p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span><!-- year --></span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span><!-- transmission --></span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span><!-- miles --></span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span><!-- price --></span>
          </p>
        </section>
      </article>
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
    },
  ];
}
