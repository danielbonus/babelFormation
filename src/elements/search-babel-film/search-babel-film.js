import { LitElement, html, css } from 'lit-element';

class SearchBabelFilm extends LitElement {

  static get  styles() {
   return css `
    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    nav {
      background: white;
      border-bottom: 1px solid #ff851a;
      height: 60px;
    }

    ul {
      display: flex;
      height: 100%;
    }
    li {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
      height: 21px;
      border-radius: .5rem;
      border: 1px;
    }

    form {
       width: 100%;
    }

    input {
       width: 22%;
      height: 35px;
      border: 1px solid #ff851a;
    }

    button {
      border-radius: .5rem;
      padding: 7px;
      font-size: 18px;
      color: white;
      background-color: #ff851a;
    }
    img {
      width: 13%;
    }
  `;
  }

  static get properties() {
    return {

    }
  }

  _handleSubmitSearch(event) {
    event.preventDefault();
    let value = this.shadowRoot.querySelector('#search').value;
    this.dispatchEvent( new CustomEvent('on-submit-search', {
      bubbles: true,
      composed: true,
      detail: value
    }))
  }

  render() {
    return html `
      <nav>
        <ul>
            <li>
                <img src="./assets/logo-babel.png" alt="">
            </li>
            <li>
                <form @submit=${this._handleSubmitSearch}>
                    <input id="search" type="text" placeholder="Buscar película">
                    <button type="submit">Buscar</button>
                </form>
            </li>
        </ul>
      </nav>
    `;
  }

}

window.customElements.define('search-babel-film', SearchBabelFilm);
