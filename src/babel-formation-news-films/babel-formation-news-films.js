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

        </section>
    `;
  }
}

window.customElements.define('app-babel-formation-news-films', babelFormationNewsFilms);
