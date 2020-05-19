import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  template: `
    <mat-grid-list cols="6" rowHeight="100px">
      <mat-grid-tile [colspan]="1" [rowspan]="2">
        <app-logo-field></app-logo-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="5" [rowspan]="2">
        <app-details-field></app-details-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="2" [rowspan]="3">
        <app-attributes-field></app-attributes-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="2" [rowspan]="3">
        <app-saves-field></app-saves-field>
      </mat-grid-tile>
      <mat-grid-tile [colspan]="2" [rowspan]="3">
      </mat-grid-tile>
    </mat-grid-list>

    <div class="row">
      <div class="column">
        <app-attack-field></app-attack-field>
      </div>
      <div class="column">
        <app-skills-field></app-skills-field>
      </div>
    </div>
  `,
  styles: [
    '.row {display: flex;}',
    '.column {flex: 50%; padding: 10px}'
  ]
})


export class SheetComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
