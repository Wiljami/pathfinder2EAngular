import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Pathfinder 2e</h1>
    <nav>
      <a routerLink="" routerLinkActive="active">Main</a>
      <a routerLink="/inventory" routerLinkActive="active">Inventory</a>
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
