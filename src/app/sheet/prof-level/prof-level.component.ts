import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-level',
  template: `
    <h1>button group test</h1>
    <mat-button-toggle-group value="{{value}}" appearance="legacy" name="fontStyle" aria-label="Proficiency Level">
      <mat-button-toggle value="untrained">U</mat-button-toggle>
      <mat-button-toggle value="trained">T</mat-button-toggle>
      <mat-button-toggle value="expert">E</mat-button-toggle>
      <mat-button-toggle value="master">M</mat-button-toggle>
      <mat-button-toggle value="legendary">L</mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styles: [
    `.mat-button-toggle{
      color: black;
    }`,
    `.mat-button-toggle-checked {
      color: white;
    }`
  ]
})
export class ProfLevelComponent implements OnInit {
  value = 'untrained';

  constructor() { }

  ngOnInit(): void {
  }

}
