import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Pathfinder 2e</h1>

    <app-control-panel></app-control-panel>

    <nav mat-tab-nav-bar>
      <a mat-tab-link routerLink="/main" routerLinkActive="active">Main page</a>
      <a mat-tab-link routerLink="/background" routerLinkActive="active">Background</a>
      <a mat-tab-link routerLink="/feats" routerLinkActive="active">Feats and Abilities</a>
      <a mat-tab-link routerLink="/inventory" routerLinkActive="active">Inventory</a>
      <a mat-tab-link routerLink="/spells" routerLinkActive="active">Spells</a>
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
