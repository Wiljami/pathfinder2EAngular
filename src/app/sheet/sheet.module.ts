import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbilityScoreComponent} from './attribute-field/attribute/ability-score.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    AbilityScoreComponent
  ],
  declarations: [
    AbilityScoreComponent
  ]
})
export class ViewModule {}
