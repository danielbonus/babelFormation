import { LitElement, html, css } from 'lit-element';
import { initRouter } from './utils/router';

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
    initRouter(this);

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
            <nav>
                <section class="container-search">
                   <form action="">
                        <input type="search">
                        <button type="submit">Buscar</button>
                   </form>
                </section>
                <section class="container-menu">
                    <ul>
                        <li>
                            <a href="/news">Novedades</a>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
        <main>

        </main>
    `;
  }
}

window.customElements.define('app-babel-formation', appBabelFormation);
