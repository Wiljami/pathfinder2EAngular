import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prof-level',
  template: `
    <mat-button-toggle-group (change)="onChange($event)" value="{{value}}"
                             appearance="legacy" name="fontStyle" aria-label="Proficiency Level">
      <mat-button-toggle value="0">U</mat-button-toggle>
      <mat-button-toggle value="2">T</mat-button-toggle>
      <mat-button-toggle value="4">E</mat-button-toggle>
      <mat-button-toggle value="6">M</mat-button-toggle>
      <mat-button-toggle value="8">L</mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styles: []
})
export class ProfLevelComponent implements OnInit {
  @Input() value;
  @Input() callback;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.callback(event.value);
  }
}
