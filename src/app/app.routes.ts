import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './home';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
