import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <p>Title: {{ productList[productId].title }}</p>
      <ul>
        <li>Price: &dollar;{{ productList[productId].price }}</li>
        <li>Description: {{ productList[productId].description }}</li>
      </ul>
    </section>
  `,
  styles: ``,
})
export class DetailsComponent {
  productList = [
    {
      title: 'Product 1',
      price: 9234,
      description: 'Product 1 is the best',
    },
    {
      title: 'Product 2',
      price: 3043,
      description: 'Product 2 is special',
    },
    {
      title: 'Product 3',
      price: 4355,
      description: 'Product 3 has my heart',
    },
  ];
  productId = -1;

  @Input() set id(value: number) {
    this.productId = value;
  }
}
