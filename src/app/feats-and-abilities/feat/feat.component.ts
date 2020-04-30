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
      <mat-form-field class="fullwidth">
        <input matInput placeholder="Feat Name">
      </mat-form-field>
      <mat-form-field class="fullwidth">
        <input matInput placeholder="Type">
      </mat-form-field>
      <mat-form-field class="fullwidth">
        <textarea matInput placeholder="Description"></textarea>
      </mat-form-field>
    </mat-expansion-panel>
  `,
  styles: [
    '.fullwidth { width: 100%; min-width: 300px;}',
    '.halfwidth { width: 50%; min-width: 150px;}',
    '.quarterwidth { width: 25%; min-width: 75px;}'
  ]
})
export class FeatComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
