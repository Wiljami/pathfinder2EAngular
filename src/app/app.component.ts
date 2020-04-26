import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Pathfinder 2e</h1>

    <nav mat-tab-nav-bar>
      <a mat-tab-link routerLink="/main" routerLinkActive="active">Main page</a>
      <a mat-tab-link routerLink="/inventory" routerLinkActive="active">Inventory</a>
    </nav>

    <div>
      <router-outlet></router-outlet>
    </div>
    <app-policy></app-policy>
  `
})
export class AppComponent {
  title = 'skd-pathfinder2e';
}
