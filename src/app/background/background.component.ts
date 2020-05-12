import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  template: `
    <h1>Background page</h1>
    <mat-grid-list cols="6" rowHeight="100px">
      <mat-grid-tile [colspan]="2" [rowspan]="4">
        <app-image-field></app-image-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="4" [rowspan]="4">
        <app-character-details-field></app-character-details-field>
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
