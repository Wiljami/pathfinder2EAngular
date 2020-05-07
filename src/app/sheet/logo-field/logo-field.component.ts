import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-field',
  template: `
    <img class="logo" src="assets/PF2Logo.png" alt="Pathfinder 2E logo.">
  `
  ,
  styles: [
    '.logo {display: block; margin-left: auto; margin-right: auto; width: 100%;}'
  ]
})
export class LogoFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
