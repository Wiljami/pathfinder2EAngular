import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spellbook',
  template: `
    <app-spell-attack-field></app-spell-attack-field>
    <app-spell-dc-field></app-spell-dc-field>
    <app-spell-tradition-field></app-spell-tradition-field>
    <app-spells-per-day-field></app-spells-per-day-field>
  `
})
export class SpellbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
