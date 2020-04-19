import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../character.service';

@Component({
  selector: 'app-sheet',
  template: `
    <p>Strength: {{character.str}}</p>
    <p>Dexterity: {{character.dex}}</p>
    <p>Constitution: {{character.con}}</p>
    <p>Intelligence: {{character.int}}</p>
    <p>Wisdom: {{character.wis}}</p>
    <p>Charisma: {{character.cha}}</p>
  `
})
export class SheetComponent implements OnInit {

  constructor(private character: CharacterService) { }

  ngOnInit(): void {
  }

}
