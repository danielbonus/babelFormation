import { LitElement, html, css } from 'lit-element';

class CardBabelFilm extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      img: { type: String }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <section>
        <header>
          <h2>${this.title}</h2>
        </header>
        <main>
            <img src="https://image.tmdb.org/t/p/original/${this.img}" alt="">
        </main>
      </section>
    `;
  }
}

window.customElements.define('card-babel-film', CardBabelFilm);
