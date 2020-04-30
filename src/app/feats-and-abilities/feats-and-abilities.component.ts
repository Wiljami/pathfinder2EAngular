import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feats-and-abilities',
  template: `
    <h1>Feats and abilities</h1>
    <div class="row">
      <div class="column">
        <h2>Ancestry Feats and Abilities</h2>
        <app-feat></app-feat>
        <app-feat></app-feat>
        <app-feat></app-feat>
        <app-feat></app-feat>
      </div>
      <div class="column">
        <h2>Class Feats and Abilities</h2>
        <app-feat></app-feat>
        <app-feat></app-feat>
        <app-feat></app-feat>
        <app-feat></app-feat>
      </div>
    </div>
  `,
  styles: [
    '.row {display: flex;}',
    '.column {flex: 50%; padding: 10px}'
  ]
})
export class FeatsAndAbilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
