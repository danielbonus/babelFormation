import { LitElement, html, css } from 'lit-element';

class babelFormationNewsFilms extends LitElement {
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

  constructor() {
    super();
  }

  render() {
    return html`
        <section class="container-page">
            <h1>Pagina novedades peliculas</h1>
        </section>
    `;
  }
}

window.customElements.define('babel-formation-news-films', babelFormationNewsFilms);
