import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../character.service';

@Component({
  selector: 'app-skills-field',
  template: `
    <h1>skills field</h1>
    <p>Placeholder STR skill: + {{character.str.value}}</p>
    <p>Placeholder DEX skill: + {{character.dex.value}}</p>
    <p>Placeholder CON skill: + {{character.con.value}}</p>
    <p>Placeholder INT skill: + {{character.int.value}}</p>
    <p>Placeholder WIS skill: + {{character.wis.value}}</p>
    <p>Placeholder CHA skill: + {{character.cha.value}}</p>
  `
})
export class SkillsFieldComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
