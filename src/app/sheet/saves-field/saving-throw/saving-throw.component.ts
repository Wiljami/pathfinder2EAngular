import {Component, Input, OnInit} from '@angular/core';
import {AbilityScore} from '../../../services/AbilityScore';
import {SavingThrow} from '../../../services/SavingThrow';

@Component({
  selector: 'app-saving-throw',
  template: `
    <h2>{{save.name}}</h2>
    {{save.prof + save.stat.mod + save.item}} = {{save.stat.modPrint}} + {{save.prof}} + {{save.item}}
    <app-prof-level [value]="save.prof" [callback]="updateProf"></app-prof-level>
  `
})
export class SavingThrowComponent implements OnInit {
  @Input() save: SavingThrow;
  constructor() { }

  ngOnInit(): void {
  }

  updateProf = (newValue) => {
    this.save.prof = Number(newValue);
  }
}
