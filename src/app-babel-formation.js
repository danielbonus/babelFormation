import { LitElement, html, css } from 'lit-element';
import './elements/card-babel-film/card-babel-film.js';
import './elements/search-babel-film/search-babel-film.js';

class AppBabelFormation extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
      }
      main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        justify-items: center;
        align-items: baseline;
      }

      .container-card {
        width: 400px;
      }

      header {
      margin-bottom: 30px;
      }

      /*
      card-babel-film::part(description) {
        color: yellow;
      }

      card-babel-film {
        --card-babel-film-background-color: red;
      }

       */

    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('on-submit-search', this._handleSearch);
    // eslint-disable-next-line no-return-assign
    this._handleApi().then(response => this.dataFilms = [...response.results]);
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
  }

  _handleSearch({ detail }) {
    // eslint-disable-next-line no-return-assign
    this._handleApi(detail).then(response => this.dataFilms = [...response.results]);
  }


  async _handleApi(search = '') {
    const _pathSearch = [
      search !== '' ? '/search' : '',
      search !== '' ? '' : '/popular',
      search !== '' ? `&query=${search}` : '',
    ];
    const response = await fetch(`https://api.themoviedb.org/3${_pathSearch[0]}/movie${_pathSearch[1]}?api_key=1fff964a23d455a3886e8ace72ddb7b3&language=en-US${_pathSearch[2]}&page=1`);
    return await response.json();
  }


  static get properties() {
    return {
      dataFilms: { type: Array },
    };
  }

  constructor() {
    super();
    this.dataFilms = [];
  }

  render() {
    return html`
      <header>
            <search-babel-film></search-babel-film>
        </header>
        <main>
            ${this.dataFilms ? this.dataFilms.map(film => (
              html `
               <div class="container-card">
                <card-babel-film
                  title=${film.title}
                  img=${film['poster_path']}
                  description=${film.overview}>
                </card-babel-film>
               </div>
              `
            )) : ''}
        </main>

    `;
  }
}

window.customElements.define('app-babel-formation', AppBabelFormation);
