import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-skills-field',
  template: `
    <h1>Skills</h1>
    <app-skill-entry [skill]="character.strSkill"></app-skill-entry><br>
    <app-skill-entry [skill]="character.dexSkill"></app-skill-entry><br>
    <app-skill-entry [skill]="character.conSkill"></app-skill-entry><br>
    <app-skill-entry [skill]="character.intSkill"></app-skill-entry><br>
    <app-skill-entry [skill]="character.wisSkill"></app-skill-entry><br>
    <app-skill-entry [skill]="character.chaSkill"></app-skill-entry><br>

  `
})
export class SkillsFieldComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
