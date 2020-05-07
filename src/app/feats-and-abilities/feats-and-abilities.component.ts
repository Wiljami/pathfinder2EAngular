import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'app-feats-and-abilities',
  template: `
    <div class="row">
      <div class="column">
        <app-feats-field [title]="ancestryTitle" [feats]="character.ancestryFeats"></app-feats-field>
        <app-feats-field [title]="skillTitle" [feats]="character.skillFeats"></app-feats-field>
        <app-feats-field [title]="generalTitle" [feats]="character.generalFeats"></app-feats-field>
      </div>
      <div class="column">
        <app-feats-field [title]="classTitle" [feats]="character.classFeats"></app-feats-field>
        <app-feats-field [title]="bonusTitle" [feats]="character.bonusFeats"></app-feats-field>
      </div>
    </div>
  `,
  styles: [
    '.row {display: flex;}',
    '.column {flex: 50%; padding: 10px}'
  ]
})
export class FeatsAndAbilitiesComponent implements OnInit {
  ancestryTitle = 'Ancestry Feats and Abilities';
  skillTitle = 'Skill Feats';
  generalTitle = 'General Feats';
  classTitle = 'Class Feats and Abilities';
  bonusTitle = 'Bonus Feats';

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }


}
