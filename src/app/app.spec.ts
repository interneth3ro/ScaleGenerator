import {
  beforeEachProviders,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [App]);

  it('should have an Angular Class Logo filename', inject([ App ], (app) => {
    expect(app.angularClassLogo).toEqual('assets/img/angularclass-avatar.png');
  }));

  it('should have an Angular Class Twitter URL', inject([ App ], (app) => {
    expect(app.angularClassUrl).toEqual('https://twitter.com/AngularClass');
  }))
});
