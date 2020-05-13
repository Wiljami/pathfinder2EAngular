import {Component, DoCheck, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-spell-attack-field',
  template: `
    <h3>Spell attack roll</h3>
    {{character.spellAttackStat.mod + profValue}} =

    <app-stat-picker [callback]="changeStat" [stat]="character.spellAttackStat.name"></app-stat-picker>
    {{character.spellAttackStat.mod}} +

    prof {{profValue}}
    <app-prof-level [value]="character.spellAttackProf" [callback]="updateProf"></app-prof-level>
  `})
export class SpellAttackFieldComponent implements OnInit, DoCheck {
  profValue: number;

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
    this.updateProfValue();
  }

  ngDoCheck(): void {
    this.updateProfValue();
  }

  updateProfValue = () => {
    if (this.character.spellAttackProf === 0) {
      this.profValue = 0;
    } else {
      this.profValue = this.character.spellAttackProf + Number(this.character.level);
    }
  }

  updateProf = (newValue) => {
    this.character.spellAttackProf = Number(newValue);
    this.updateProfValue();
  }

  changeStat = (newStat) => {
    this.character.spellAttackStat = newStat;
  }
}
