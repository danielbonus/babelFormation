import { Router } from '@vaadin/router';
//importamos news films no lazy load
import '../babel-formation-news-films/babel-formation-news-films';
export const initRouter = (element) => {

  // Render de componentes importados por el router --- distintas paginas
  const router = new Router(element.shadowRoot.querySelector('main'));
  router.setRoutes([
    ...router.getRoutes(),
    {
      path: '/news',
      animate: true,
      component: 'babel-formation-news-films'
    }
  ])
}
