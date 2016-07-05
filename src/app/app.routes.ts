import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { ScaleGenerator } from './scale-generator';
import { NoContent } from './no-content';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about', component: 'About' },
  // async components with children routes must use WebpackAsyncRoute
  { path: 'detail', component: 'Detail', canActivate: [ WebpackAsyncRoute ] },
  { path: 'scale-generator', component: 'ScaleGenerator' },
  { path: '**',    component: NoContent },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'About': require('es6-promise-loader!./about'),
  'Detail': require('es6-promise-loader!./+detail'),
  'ScaleGenerator': require('es6-promise-loader!./scale-generator')
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Detail'],
  asyncRoutes['ScaleGenerator']
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
