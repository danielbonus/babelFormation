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

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this._handleApi().then(response => this.dataFilms = [...response.results]);
  }

  async _handleApi() {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1fff964a23d455a3886e8ace72ddb7b3&language=en-US&page=1');
    return await response.json();
  }


  static get properties() {
    return {
      dataFilms: { type: Array }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
            <h3>desde header app</h3>
        </header>
        <main>
            ${this.dataFilms ? this.dataFilms.map( film => (
              html `
                <card-babel-film
                title=${film.title}
                img=${film['poster_path']}
                >
                </card-babel-film>
              `
            )) : ''}
        </main>

    `;
  }
}

window.customElements.define('app-babel-formation', AppBabelFormation);
