import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../character.service';

@Component({
  selector: 'app-sheet',
  template: `
    <app-attribute-field [stat]="character.str"></app-attribute-field>
    <app-attribute-field [stat]="character.dex"></app-attribute-field>
    <app-attribute-field [stat]="character.con"></app-attribute-field>
    <app-attribute-field [stat]="character.int"></app-attribute-field>
    <app-attribute-field [stat]="character.wis"></app-attribute-field>
    <app-attribute-field [stat]="character.cha"></app-attribute-field>
  `
})
export class SheetComponent implements OnInit {

  constructor(private character: CharacterService) { }

  ngOnInit(): void {
  }

}
