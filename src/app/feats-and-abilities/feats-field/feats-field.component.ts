import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Feat} from '../../services/Feat';

@Component({
  selector: 'app-feats-field',
  template: `
    <h2>{{title}}</h2>
    <button type="button" (click)="addFeat()">Add Feat</button>
    <button type="button" (click)="lockSheet()">{{lockButtonText}}</button>

    <div cdkDropListDisabled="{{listLocked}}" cdkDropList (cdkDropListDropped)="drop($event)">
      <div cdkDrag [cdkDragData]="feat" *ngFor="let feat of feats">
        <app-feat [feat]="feat"></app-feat>
      </div>
    </div>
  `
})
export class FeatsFieldComponent implements OnInit {
  @Input() title;
  @Input() feats;

  listLocked = true;
  lockButtonText = 'Unlock list';

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.feats, event.previousIndex, event.currentIndex);
  }

  addFeat() {
    this.feats.push({name : 'New Feat', description: '', type: ''});
  }

  lockSheet() {
    this.lockButtonText = this.listLocked ? 'Lock list' : 'Unlock list';
    this.listLocked = !this.listLocked;
  }
}
