import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.style.css'],
  template: `
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
    <footer>
      <span>Built using the WebPack Angular 2 Starter by <a [href]="angularClassUrl">@AngularClass</a></span>
      <div>
        <img [src]="angularClassLogo" width="25%">
      </div>
    </footer>
  `
})
export class App {
  angularClassLogo = 'assets/img/angularclass-avatar.png';
  angularClassUrl = 'https://twitter.com/AngularClass';

  constructor() {}

}
