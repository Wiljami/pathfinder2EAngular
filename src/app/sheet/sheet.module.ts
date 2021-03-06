import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbilityScoreComponent} from './attribute-field/attribute/ability-score.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {SavesFieldComponent} from './saves-field/saves-field.component';
import {SavingThrowComponent} from './saves-field/saving-throw/saving-throw.component';
import {AttributesFieldComponent} from './attribute-field/attributes-field.component';
import {DetailsFieldComponent} from './details-field/details-field.component';
import {SkillsFieldComponent} from './skills-field/skills-field.component';
import {ProfLevelComponent} from '../shared-components/prof-level/prof-level.component';
import {SkillEntryComponent} from './skills-field/skill-entry/skill-entry.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        FormsModule,
        MatButtonToggleModule,
        MatGridListModule,
    ],
  exports: [
    AbilityScoreComponent,
    AttributesFieldComponent,
    SavesFieldComponent,
    SkillsFieldComponent,
    DetailsFieldComponent,
    ProfLevelComponent
  ],
  declarations: [
    AbilityScoreComponent,
    SavesFieldComponent,
    SavingThrowComponent,
    AttributesFieldComponent,
    DetailsFieldComponent,
    SkillsFieldComponent,
    ProfLevelComponent,
    SkillEntryComponent
  ]
})
export class ViewModule {}
