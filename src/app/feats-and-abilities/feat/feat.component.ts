import {Component, Input, OnInit} from '@angular/core';
import {Feat} from '../../services/Feat';

@Component({
  selector: 'app-feat',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <h3>{{feat.name}}</h3>
        </mat-panel-title>
      </mat-expansion-panel-header>
      <mat-form-field class="fullwidth">
        <input matInput placeholder="{{feat.name}}">
      </mat-form-field>
      <mat-form-field class="fullwidth">
        <input matInput placeholder="{{feat.type}}">
      </mat-form-field>
      <mat-form-field class="fullwidth">
        <textarea matInput placeholder="{{feat.description}}"></textarea>
      </mat-form-field>
    </mat-expansion-panel>
  `,
  styles: [
    '.fullwidth { width: 100%; min-width: 300px;}',
    '.halfwidth { width: 50%; min-width: 150px;}',
    '.quarterwidth { width: 25%; min-width: 75px;}'
  ]
})
export class FeatComponent implements OnInit {
  @Input() feat: Feat;

  constructor() { }

  ngOnInit(): void {
  }
}
