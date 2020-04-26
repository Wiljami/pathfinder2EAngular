import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {SheetComponent} from './sheet/sheet.component';
import {InventoryComponent} from './inventory/inventory.component';

const appRoutes: Routes = [
  { path: 'main', component: SheetComponent},
  { path: 'inventory', component: InventoryComponent},
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
