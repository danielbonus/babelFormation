import { LitElement, html, css } from 'lit-element';

class appBabelFormation extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  firstUpdated() {
    super.firstUpdated();

  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
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

window.customElements.define('app-babel-formation', appBabelFormation);
