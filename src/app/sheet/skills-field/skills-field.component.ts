import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../character.service';

@Component({
  selector: 'app-skills-field',
  template: `
    <h1>skills field</h1>
    <p>Placeholder skill: + {{character.dex.modifier}}</p>
  `
})
export class SkillsFieldComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
