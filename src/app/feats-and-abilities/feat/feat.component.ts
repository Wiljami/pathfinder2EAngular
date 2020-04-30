import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feat',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <h3>Special 1st</h3>
        </mat-panel-title>
      </mat-expansion-panel-header>
      <mat-form-field>
        <input matInput placeholder="Name">
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Age">
      </mat-form-field>
    </mat-expansion-panel>
  `,
  styles: [
  ]
})
export class FeatComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }
}
