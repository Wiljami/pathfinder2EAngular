import { Component, DoCheck, Input, OnInit} from '@angular/core';
import { AbilityScore } from 'src/app/services/AbilityScore';

@Component({
  selector: 'app-ability-score',
  template: `
    {{stat.modPrint}} MOD {{stat.name}} score:
    <input type="number" matInput [(ngModel)]="value" [min]="1" [max]="99" (change)="change()">
  `
})
export class AbilityScoreComponent implements OnInit, DoCheck {
  @Input() stat: AbilityScore;
  value;

  constructor() { }

  ngOnInit(): void {
    this.value = this.stat.value;
  }

  change() {
    this.stat.updateValue(this.value);
  }

  ngDoCheck(): void {
    this.value = this.stat.value;
  }
}
