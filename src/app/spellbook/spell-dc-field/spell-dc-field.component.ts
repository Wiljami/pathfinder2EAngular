import {Component, DoCheck, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-spell-dc-field',
  template: `
    <h3>Spell DC</h3>
    total: {{character.spellDCStat.mod + profValue + 10}} =
    base: 10

    key: {{character.spellDCStat.mod}}
    prof: {{profValue}}
    <app-prof-level [value]="character.spellDCProf" [callback]="updateProf"></app-prof-level>
  `})
export class SpellDCFieldComponent implements OnInit, DoCheck {
  profValue: number;

  stats = ['Strength', 'Dexterity', 'Constitution'];

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
    this.updateProfValue();
  }

  ngDoCheck(): void {
    this.updateProfValue();
  }

  updateProfValue = () => {
    if (this.character.spellDCProf === 0) {
      this.profValue = 0;
    } else {
      this.profValue = this.character.spellDCProf + Number(this.character.level);
    }
  }

  updateProf = (newValue) => {
    this.character.spellDCProf = Number(newValue);
    this.updateProfValue();
  }
}
