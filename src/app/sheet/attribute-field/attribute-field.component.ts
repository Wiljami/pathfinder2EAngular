import {Component, Input, OnInit} from '@angular/core';
import { AbilityScore } from 'src/app/services/AbilityScore';

@Component({
  selector: 'app-attribute-field',
  template: `
    {{stat.modPrint}} MOD {{stat.name}} score:
    <input type="number" matInput [(ngModel)]="value" (change)="change()">
  `
})
export class AttributeFieldComponent implements OnInit {
  @Input() stat: AbilityScore;
  value;

  constructor() { }

  ngOnInit(): void {
    this.value = this.stat.value;
  }

  change() {
    this.stat.updateValue(this.value);
  }
}
