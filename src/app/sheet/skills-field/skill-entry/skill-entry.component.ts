import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-entry',
  template: `
    {{skill.name}}: {{this.skill.stat.mod + this.skill.prof}} = {{this.skill.stat.modPrint}} + {{this.skill.prof}}
    <app-prof-level [value]="skill.prof" [callback]="updateProf"></app-prof-level>
  `
})
export class SkillEntryComponent implements OnInit {
  @Input() skill;

  constructor() { }

  ngOnInit(): void {
  }

  updateProf = (newValue) => {
    this.skill.prof = Number(newValue);
  }
}
