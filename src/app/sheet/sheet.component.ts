import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'app-sheet',
  template: `
    <app-attribute-field [stat]="character.str"></app-attribute-field><br>
    <app-attribute-field [stat]="character.dex"></app-attribute-field><br>
    <app-attribute-field [stat]="character.con"></app-attribute-field><br>
    <app-attribute-field [stat]="character.int"></app-attribute-field><br>
    <app-attribute-field [stat]="character.wis"></app-attribute-field><br>
    <app-attribute-field [stat]="character.cha"></app-attribute-field><br>
    <app-skills-field></app-skills-field>
    <app-policy></app-policy>
  `
})
export class SheetComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
