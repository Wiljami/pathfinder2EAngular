import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {Attack} from '../../../services/Attack';

@Component({
  selector: 'app-attack',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <h3>{{name}}</h3>
          <div *ngIf="!locked" class="removebutton">
            <button mat-stroked-button color="warn" (click)="removeMe()">Remove</button>
          </div>
        </mat-panel-title>
      </mat-expansion-panel-header>
      <mat-form-field class="fullwidth">
        <mat-label>Weapon/Ability</mat-label>
        <input type="text" [(ngModel)]="name" matInput [min]="1" [max]="20" (change)="changeName($event)">
      </mat-form-field>
      <mat-form-field class="fullwidth">
        <mat-label>Traits</mat-label>
        <input type="text" [(ngModel)]="traits" matInput [min]="1" [max]="20" (change)="changeType($event)">
      </mat-form-field>
      <mat-form-field class="fullwidth">
        <mat-label>Description</mat-label>
        <textarea matInput
                  [(ngModel)]="description"
                  cdkTextareaAutosize
                  #autosize="cdkTextareaAutosize"
                  cdkAutosizeMinRows="1"
                  cdkAutosizeMaxRows="10"
                  (change)="changeDescription($event)">
        </textarea>
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
export class AttackComponent implements OnInit, DoCheck {
  @Input() attack: Attack;
  @Input() callBack;
  @Input() locked: boolean;

  name: string;
  traits: string;
  description: string;

  constructor() { }

  ngOnInit(): void {
    this.name = this.attack.name;
    this.traits = this.attack.traits;
    this.description = this.attack.description;
  }

  ngDoCheck(): void {
    this.name = this.attack.name;
    this.traits = this.attack.traits;
    this.description = this.attack.description;
  }

  changeDescription(event) {
    this.attack.description = event.target.value;
  }

  changeName(event) {
    this.attack.name = event.target.value;
  }

  changeType(event) {
    this.attack.traits = event.target.value;
  }

  removeMe() {
    this.callBack(this.attack);
  }
}
