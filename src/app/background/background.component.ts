import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  template: `
    <h1>Background page</h1>
    <app-image-field></app-image-field>
  `
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
