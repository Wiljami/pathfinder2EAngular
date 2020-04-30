import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feats-and-abilities',
  template: `
    <h1>Feats and abilities</h1>
    <app-feat></app-feat>
    <app-feat></app-feat>
    <app-feat></app-feat>
    <app-feat></app-feat>
  `
})
export class FeatsAndAbilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
