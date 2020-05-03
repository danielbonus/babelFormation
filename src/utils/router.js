import { Router } from '@vaadin/router';

export const initRouter = (element) => {

  // Render de componentes importados por el router --- distintas paginas
  const router = new Router(element.shadowRoot.querySelector('main'));

}
