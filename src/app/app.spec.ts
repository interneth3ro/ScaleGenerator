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

  it('should have a name', inject([ App ], (app) => {
    expect(app.name).toEqual('Scale Generator');
  }));

});
