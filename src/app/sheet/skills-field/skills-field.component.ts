import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-skills-field',
  template: `
    <h1>skills field</h1>
    <p>Placeholder STR skill: {{character.str.modPrint}}</p>
    <p>Placeholder DEX skill: {{character.dex.modPrint}}</p>
    <p>Placeholder CON skill: {{character.con.modPrint}}</p>
    <p>Placeholder INT skill: {{character.int.modPrint}}</p>
    <p>Placeholder WIS skill: {{character.wis.modPrint}}</p>
    <p>Placeholder CHA skill: {{character.cha.modPrint}}</p>
  `
})
export class SkillsFieldComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
