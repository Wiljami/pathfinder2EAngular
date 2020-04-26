import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { CharacterService } from './services/character.service';
import { ViewModule } from './sheet/sheet.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsFieldComponent } from './sheet/skills-field/skills-field.component';
import { ProfLevelComponent } from './sheet/prof-level/prof-level.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SkillEntryComponent } from './sheet/skills-field/skill-entry/skill-entry.component';
import { PolicyComponent } from './policy/policy.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    SkillsFieldComponent,
    ProfLevelComponent,
    SkillEntryComponent,
    PolicyComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    ViewModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
