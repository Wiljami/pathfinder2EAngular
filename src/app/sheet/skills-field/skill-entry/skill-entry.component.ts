import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {CharacterService} from '../../../services/character.service';

@Component({
  selector: 'app-skill-entry',
  template: `
    {{skill.name}}: {{this.skill.stat.mod + this.profValue}} = {{this.skill.stat.modPrint}} + {{this.profValue}}
    <app-prof-level [value]="skill.prof" [callback]="updateProf"></app-prof-level>
  `
})
export class SkillEntryComponent implements OnInit, DoCheck {
  @Input() skill;

  profValue: number;

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
    this.updateProfValue();
  }

  ngDoCheck(): void {
    this.updateProfValue();
  }

  updateProfValue = () => {
    if (this.skill.prof === 0) {
      this.profValue = 0;
    } else {
      this.profValue = this.skill.prof + Number(this.character.level);
    }
  }

  updateProf = (newValue) => {
    this.skill.prof = Number(newValue);
    this.updateProfValue();
  }
}
