import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'app-sheet',
  template: `
    <mat-grid-list cols="6" rowHeight="100px">
      <mat-grid-tile [colspan]="2" [rowspan]="3">
        <app-attributes-field></app-attributes-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="2" [rowspan]="3">
        <app-saves-field></app-saves-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="2" [rowspan]="3">
      </mat-grid-tile>


      <mat-grid-tile [colspan]="3" [rowspan]="2">
      </mat-grid-tile>
      <mat-grid-tile [colspan]="3" [rowspan]="2">
        <app-skills-field></app-skills-field>
      </mat-grid-tile>
    </mat-grid-list>
  `
})


export class SheetComponent implements OnInit {
  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
