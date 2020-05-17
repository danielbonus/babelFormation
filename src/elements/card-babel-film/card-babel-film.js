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
    return {};
  }


  render() {
    return html`
      <section>
        <header>

        </header>
        <main>

        </main>
      </section>
    `;
  }
}

window.customElements.define('card-babel-film', CardBabelFilm);
