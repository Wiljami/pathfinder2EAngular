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
import { ImageFieldComponent } from './background/image-field/image-field.component';
import {MatMenuModule} from '@angular/material/menu';
import { ImageDialogComponent } from './background/image-field/image-dialog/image-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { FeatComponent } from './feats-and-abilities/feats-field/feat/feat.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LogoFieldComponent } from './sheet/logo-field/logo-field.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FeatsFieldComponent } from './feats-and-abilities/feats-field/feats-field.component';
import {MatButtonModule} from '@angular/material/button';
import { CharacterDetailsFieldComponent } from './background/character-details-field/character-details-field.component';
import { CampaignNotesFieldComponent } from './background/campaign-notes-field/campaign-notes-field.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    PolicyComponent,
    InventoryComponent,
    FeatsAndAbilitiesComponent,
    SpellbookComponent,
    BackgroundComponent,
    ControlPanelComponent,
    ImageFieldComponent,
    ImageDialogComponent,
    FeatComponent,
    LogoFieldComponent,
    FeatsFieldComponent,
    CharacterDetailsFieldComponent,
    CampaignNotesFieldComponent
  ],
  imports: [
    BrowserModule,
    ViewModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    AppRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    DragDropModule,
    MatButtonModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
