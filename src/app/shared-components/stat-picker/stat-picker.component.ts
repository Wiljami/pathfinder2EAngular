import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-stat-picker',
  template: `
    <mat-form-field class=fieldWidth (change)="change($event)">
      <mat-label>Key</mat-label>
      <select matNativeControl required [value]="stat">
        <option value="Strength">STR</option>
        <option value="Dexterity">DEX</option>
        <option value="Constitution">CON</option>
        <option value="Intelligence">INT</option>
        <option value="Wisdom">WIS</option>
        <option value="Charisma">CHA</option>
      </select>
    </mat-form-field>
  `,
  styles: [
    '.fieldWidth {width: 50px;}'
  ]
})
export class StatPickerComponent implements OnInit {
  @Input() callback;
  @Input() stat;

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

  change(event) {
    this.callback(this.character.parseStatName(event.target.value));
  }

}
