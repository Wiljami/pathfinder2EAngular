import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {SheetComponent} from './sheet/sheet.component';
import {InventoryComponent} from './inventory/inventory.component';
import {FeatsAndAbilitiesComponent} from './feats-and-abilities/feats-and-abilities.component';
import {SpellbookComponent} from './spellbook/spellbook.component';
import {BackgroundComponent} from './background/background.component';

const appRoutes: Routes = [
  { path: 'main', component: SheetComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'feats', component: FeatsAndAbilitiesComponent},
  { path: 'abilities', component: FeatsAndAbilitiesComponent},
  { path: 'spells', component: SpellbookComponent},
  { path: 'background', component: BackgroundComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
