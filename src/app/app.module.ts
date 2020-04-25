import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { CharacterService } from './character.service';
import {ViewModule} from './sheet/sheet.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsFieldComponent } from './sheet/skills-field/skills-field.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    SkillsFieldComponent
  ],
  imports: [
    BrowserModule,
    ViewModule,
    BrowserAnimationsModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
