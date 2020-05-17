import { LitElement, html, css } from 'lit-element';
import './elements/card-babel-film/card-babel-film';

class AppBabelFormation extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
    };
  }

  render() {
    return html`
      <header>

      </header>
      <main>

      </main>

    `;
  }
}

window.customElements.define('app-babel-formation', AppBabelFormation);
