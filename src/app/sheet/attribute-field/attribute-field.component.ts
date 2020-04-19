import {Component, Input, OnInit} from '@angular/core';
import {AbilityScore} from '../../interface/AbilityScore';

@Component({
  selector: 'app-attribute-field',
  template: `
    <p>{{stat.name}}: {{stat.value}}</p>
  `
})
export class AttributeFieldComponent implements OnInit {
  @Input() stat: AbilityScore;

  constructor() { }

  ngOnInit(): void {
  }

}
