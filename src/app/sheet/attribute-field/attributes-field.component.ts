import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-attributes-field',
  template: `
    <h1>Attributes</h1>
    <app-ability-score [stat]="character.str"></app-ability-score><br>
    <app-ability-score [stat]="character.dex"></app-ability-score><br>
    <app-ability-score [stat]="character.con"></app-ability-score><br>
    <app-ability-score [stat]="character.int"></app-ability-score><br>
    <app-ability-score [stat]="character.wis"></app-ability-score><br>
    <app-ability-score [stat]="character.cha"></app-ability-score><br>
  `
})
export class AttributesFieldComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
