import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-skills-field',
  template: `
    <h1>Skills</h1>
    <div *ngFor="let skill of character.skills" >
      <app-skill-entry [skill]="skill"></app-skill-entry>
    </div>
  `
})
export class SkillsFieldComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
