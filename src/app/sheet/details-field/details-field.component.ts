import {Component, DoCheck, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-details-field',
  template: `
    <div class="tablewidth">
      <mat-grid-list cols="10" rowHeight="60px">
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Character name</mat-label>
            <input type="text" [(ngModel)]="name" matInput (change)="changeName($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Class</mat-label>
            <input type="text" [(ngModel)]="class" matInput (change)="changeClass($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="2">
          <mat-form-field class="halfwidth">
            <mat-label>Level</mat-label>
            <input type="number" [(ngModel)]="level" matInput [min]="1" [max]="20" (change)="changeLevel($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Player name</mat-label>
            <input type="text" [(ngModel)]="playerName" matInput [min]="1" [max]="20" (change)="changePlayerName($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Ancestry and heritage</mat-label>
            <input type="text" [(ngModel)]="ancestry" matInput [min]="1" [max]="20" (change)="changeAncestry($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="1">
          <mat-form-field class="quarterwidth">
            <mat-label>Alignment</mat-label>
            <input type="text" [(ngModel)]="alignment" matInput [min]="1" [max]="20" (change)="changeAlignment($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="1">
          <mat-form-field class="quarterwidth">
            <mat-label>Size</mat-label>
            <input type="text" [(ngModel)]="size" matInput [min]="1" [max]="20" (change)="changeSize($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Deity</mat-label>
            <input type="text" [(ngModel)]="deity" matInput [min]="1" [max]="20" (change)="changeDeity($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Background</mat-label>
            <input type="text" [(ngModel)]="background" matInput [min]="1" [max]="20" (change)="changeBackground($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="2">
          <mat-form-field class="halfwidth">
            <mat-label>Traits</mat-label>
            <input type="text" [(ngModel)]="traits" matInput [min]="1" [max]="20" (change)="changeTraits($event)">
          </mat-form-field>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [
    '.tablewidth { min-width: 800px; width: 100%}',
    '.fullwidth { width: 100%; min-width: 300px;}',
    '.halfwidth { width: 50%; min-width: 150px;}',
    '.quarterwidth { width: 25%; min-width: 75px;}'
  ]
})
export class DetailsFieldComponent implements OnInit, DoCheck {
  level: number;
  name: string;
  class: string;
  playerName: string;
  deity: string;
  ancestry: string;
  background: string;
  alignment: string;
  size: string;
  traits: string;

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
    this.updateValues();
  }

  ngDoCheck(): void {
    this.updateValues();
  }

  updateValues = () =>  {
    this.level = this.character.level;
    this.name = this.character.name;
    this.class = this.character.class;
    this.playerName = this.character.playerName;
    this.deity = this.character.deity;
    this.ancestry = this.character.ancestry;
    this.background = this.character.background;
    this.alignment = this.character.alignment;
    this.size = this.character.size;
    this.traits = this.character.traits;
  }

  changeName(event) {
    this.character.name = event.target.value;
  }

  changeClass(event) {
    this.character.class = event.target.value;
  }

  changeLevel(event) {
    this.character.level = event.target.value;
  }

  changePlayerName(event) {
    this.character.playerName = event.target.value;
  }

  changeDeity(event) {
    this.character.deity = event.target.value;
  }

  changeAncestry(event) {
    this.character.ancestry = event.target.value;
  }

  changeBackground(event) {
    this.character.background = event.target.value;
  }

  changeAlignment(event) {
    this.character.alignment = event.target.value;
  }

  changeSize(event) {
    this.character.size = event.target.value;
  }

  changeTraits(event) {
    this.character.traits = event.target.value;
  }
}
