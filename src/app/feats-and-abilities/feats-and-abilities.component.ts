import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feats-and-abilities',
  template: `
    <div class="row">
      <div class="column">
        <app-feats-field [title]="ancestryTitle"></app-feats-field>
        <app-feats-field [title]="skillTitle"></app-feats-field>
        <app-feats-field [title]="generalTitle"></app-feats-field>
      </div>
      <div class="column">
        <app-feats-field [title]="classTitle"></app-feats-field>
        <app-feats-field [title]="bonusTitle"></app-feats-field>
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

  constructor() { }

  ngOnInit(): void {
  }


}
