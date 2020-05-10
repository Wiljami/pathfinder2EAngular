import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {Feat} from '../../../services/Feat';

@Component({
  selector: 'app-feat',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <h3>{{name}}</h3>
          <div *ngIf="!locked" class="removebutton">
            <button mat-raised-button color="warn" (click)="removeMe()">Remove</button>
          </div>
        </mat-panel-title>
      </mat-expansion-panel-header>
      <mat-form-field class="fullwidth">
        <mat-label>Name</mat-label>
        <input type="text" [(ngModel)]="name" matInput [min]="1" [max]="20" (change)="changeName($event)">
      </mat-form-field>
      <mat-form-field class="fullwidth">
        <mat-label>Type</mat-label>
        <input type="text" [(ngModel)]="type" matInput [min]="1" [max]="20" (change)="changeType($event)">
      </mat-form-field>
      <mat-form-field class="fullwidth">
        <mat-label>Description</mat-label>
        <input type="text" [(ngModel)]="description" matInput [min]="1" [max]="20" (change)="changeDescription($event)">
      </mat-form-field>
    </mat-expansion-panel>
  `,
  styles: [
    '.fullwidth { width: 100%; min-width: 300px;}',
    '.halfwidth { width: 50%; min-width: 150px;}',
    '.quarterwidth { width: 25%; min-width: 75px;}',
    '.removebutton { display: block; margin-left: auto; margin-right: 0;}'
  ]
})
export class FeatComponent implements OnInit, DoCheck {
  @Input() feat: Feat;
  @Input() callBack;
  @Input() locked: boolean;

  name: string;
  type: string;
  description: string;

  constructor() { }

  ngOnInit(): void {
    this.name = this.feat.name;
    this.type = this.feat.type;
    this.description = this.feat.description;
  }

  ngDoCheck(): void {
    this.name = this.feat.name;
    this.type = this.feat.type;
    this.description = this.feat.description;
  }

  changeDescription(event) {
    this.feat.description = event.target.value;
  }

  changeName(event) {
    this.feat.name = event.target.value;
  }

  changeType(event) {
    this.feat.type = event.target.value;
  }

  removeMe() {
    this.callBack(this.feat);
  }
}
