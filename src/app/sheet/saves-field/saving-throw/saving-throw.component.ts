import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {AbilityScore} from '../../../services/AbilityScore';
import {SavingThrow} from '../../../services/SavingThrow';
import {CharacterService} from '../../../services/character.service';

@Component({
  selector: 'app-saving-throw',
  template: `
    <h2>{{save.name}}</h2>
    {{profValue + save.stat.mod + save.item}} = {{save.stat.modPrint}} + {{profValue}} + {{save.item}}
    <app-prof-level [value]="save.prof" [callback]="updateProf"></app-prof-level>
  `
})
export class SavingThrowComponent implements OnInit, DoCheck {
  @Input() save: SavingThrow;
  constructor(public character: CharacterService) { }

  profValue: number;

  ngOnInit(): void {
    this.updateProfValue();
  }

  ngDoCheck(): void {
    this.updateProfValue();
  }

  updateProfValue = () => {
    if (this.save.prof === 0) {
      this.profValue = 0;
    } else {
      this.profValue = this.save.prof + Number(this.character.level);
    }
  }

  updateProf = (newValue) => {
    this.save.prof = Number(newValue);
    this.updateProfValue();
  }
}
