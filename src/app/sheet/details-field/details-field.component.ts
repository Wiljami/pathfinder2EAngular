import {Component, DoCheck, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-details-field',
  template: `
    <div class="tablewidth">
      <mat-grid-list cols="10" rowHeight="60px">
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Character name</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Class</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="2">
          <mat-form-field class="halfwidth">
            <mat-label>Level</mat-label>
            <input type="number" [(ngModel)]="level" matInput [min]="1" [max]="20"/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Player name</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Ancestry and heritage</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="1">
          <mat-form-field class="quarterwidth">
            <mat-label>Alignment</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="1">
          <mat-form-field class="quarterwidth">
            <mat-label>Size</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Deity</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="4">
          <mat-form-field class="fullwidth">
            <mat-label>Background</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="2">
          <mat-form-field class="halfwidth">
            <mat-label>Traits</mat-label>
            <input matInput/>
          </mat-form-field>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [
    '.tablewidth { min-width: 800px; width: 100%}',
    '.fullwidth { width: 100%; min-width: 300px;}',
    '.halfwidth { width: 50%; min-width: 150px;}',
    '.quarterwidth { width: 25%; min-width: 75px;}',
  ]
})
export class DetailsFieldComponent implements OnInit, DoCheck {
  level: number;

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
    this.level = this.character.level;
  }

  ngDoCheck(): void {
    this.level = this.character.level;
  }
}
