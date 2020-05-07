import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Feat} from '../services/Feat';

@Component({
  selector: 'app-feats-and-abilities',
  template: `
    <h1>Feats and abilities</h1>
    <div class="row">
      <div class="column">
        <app-feats-field [title]="ancestryTitle"></app-feats-field>
        <h2>Skill Feats</h2>
        <h2>General Feats</h2>
      </div>
      <div class="column">
        <h2>Class Feats and Abilities</h2>
        <h2>Bonus Feats</h2>
      </div>
    </div>
  `,
  styles: [
    '.row {display: flex;}',
    '.column {flex: 50%; padding: 10px}'
  ]
})
export class FeatsAndAbilitiesComponent implements OnInit {
  ancestryTitle = 'Ancestry Feats and Abilities'

  constructor() { }

  ngOnInit(): void {
  }


}
