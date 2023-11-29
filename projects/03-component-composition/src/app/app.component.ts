import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="menu">🏠 Home</section>
    <section class="main">
      <h1>Metrics and Figures Dashboard</h1>
      <section class="content">
        <article class="tile"></article>
        <article class="tile">
          <img src="/assets/noun-pie-chart-6331100-C462DD.png" height="300" />
        </article>
        <article class="tile">
          <img src="/assets/noun-bar-chart-1092111-FF824A.png" height="300" />
        </article>
      </section>
    </section>
  `,
  styles: `
    :host {
      display: flex;
    }
    .menu {
      width: 100px;
      height: 90vh;
      background: rgb(29 36 49);;
      padding: 10px;
      border-radius: 5px;
      color: white;
    }
    .main {
      background: rgb(29 36 49);
      width: 100%;
      padding: 10px;
      margin-left: 10px;
      border-radius: 5px;
      color: white;
    }
    .tile {
      width: 400px;
      height: 400px;
      background: rgb(67 83 113);
      padding: 10px;
      margin: 15px 15px 15px 0;
      color: white;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
    }
  `,
})
export class AppComponent {
  title = '03-component-composition';
}
