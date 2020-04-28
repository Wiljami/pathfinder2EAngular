import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { CharacterService } from './services/character.service';
import { ViewModule } from './sheet/sheet.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PolicyComponent } from './policy/policy.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatsAndAbilitiesComponent } from './feats-and-abilities/feats-and-abilities.component';
import { SpellbookComponent } from './spellbook/spellbook.component';
import { BackgroundComponent } from './background/background.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    PolicyComponent,
    InventoryComponent,
    FeatsAndAbilitiesComponent,
    SpellbookComponent,
    BackgroundComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    ViewModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    AppRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
