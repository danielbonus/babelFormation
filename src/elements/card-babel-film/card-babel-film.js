import { LitElement, html, css  } from 'lit-element';

class cardBabelFilm extends LitElement {
  static get  styles() {
    return [
      css `
        :host {
          display: block;
        }
      `
    ]
  }

  static get properties() {
    return {
      title: { type: String },
      data: { type: Array }
    }
  }

  render() {
    return html `
        <section>
            <header>

            </header>
            <main>

            </main>
        </section>
    `;
  }

}

window.customElements.define('card-babel-film', cardBabelFilm);
