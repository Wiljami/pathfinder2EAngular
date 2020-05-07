import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Feat} from '../services/Feat';

@Component({
  selector: 'app-feats-and-abilities',
  template: `
    <h1>Feats and abilities</h1>
    <div class="row">
      <div class="column">
        <h2>Ancestry Feats and Abilities</h2>
        <div cdkDropList (cdkDropListDropped)="drop($event)">
          <div cdkDrag [cdkDragData]="feat" *ngFor="let feat of feats">
            <app-feat [feat]="feat"></app-feat>
          </div>
        </div>
        <button type="button" (click)="addFeat()">Add Feat</button>
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
  feats: Feat[] = [{name : 'Example feat', description: 'hellurei', type: 'yarr'}];

  constructor() { }

  ngOnInit(): void {
  }

  addFeat() {
    this.feats.push({name : 'new feat', description: 'hellurei', type: 'yarr'});
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.feats, event.previousIndex, event.currentIndex);
  }
}
