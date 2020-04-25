import {Component, Input, OnInit} from '@angular/core';
import { AbilityScore } from 'src/app/sheet/AbilityScore';

@Component({
  selector: 'app-attribute-field',
  template: `
    <p>{{stat.name}}: {{stat.value}}</p>
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
