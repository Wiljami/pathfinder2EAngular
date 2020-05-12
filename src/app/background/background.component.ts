import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  template: `
    <mat-grid-list cols="6" rowHeight="100px">
      <mat-grid-tile [colspan]="2" [rowspan]="6">
        <app-image-field></app-image-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="4" [rowspan]="2">
        <app-character-details-field></app-character-details-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="4" [rowspan]="4">
        <app-character-personality-field></app-character-personality-field>
      </mat-grid-tile>
    </mat-grid-list>
    <app-campaign-notes-field></app-campaign-notes-field>
  `
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
