import { LitElement, html, css } from 'lit-element';

class CardBabelFilm extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #C8C8C8;
        border-radius: 1rem;
        background-color: var( --card-babel-film-background-color,  #ff851a);
        color: white;
        margin-bottom: 50px;
      }

      img {
      width: 100%;
      }

      p {
        padding: 0 1rem;
      }

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      img: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.img = '';
  }

  render() {
    return html`
      <section>
        <header>
          <h2>${this.title}</h2>
        </header>
        <main>
            <div class="container-poster">
                <img src="https://image.tmdb.org/t/p/original/${this.img}" alt="">
            </div>
            <p part="description">${this.description}</p>
        </main>
      </section>
    `;
  }
}

window.customElements.define('card-babel-film', CardBabelFilm);
