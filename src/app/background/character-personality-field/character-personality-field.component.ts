import {Component, DoCheck, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-character-personality-field',
  template: `
    <div class="tablewidth">
      <mat-grid-list cols="2" rowHeight="65px">
        <mat-grid-tile colspan="2">
          <mat-form-field class="fullwidth">
            <mat-label>Attitude</mat-label>
            <input type="text" [(ngModel)]="attitude" matInput (change)="changeAttitude($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="2">
          <mat-form-field class="fullwidth">
            <mat-label>Beliefs</mat-label>
            <input type="text" [(ngModel)]="beliefs" matInput (change)="changeBeliefs($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="1">
          <mat-form-field class="halfwidth">
            <mat-label>Likes</mat-label>
            <input type="text" [(ngModel)]="likes" matInput (change)="changeLikes($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="1">
          <mat-form-field class="halfwidth">
            <mat-label>Dislikes</mat-label>
            <input type="text" [(ngModel)]="dislikes" matInput (change)="changeDislikes($event)">
          </mat-form-field>
        </mat-grid-tile>
        <mat-grid-tile colspan="2" rowspan="2">
          <mat-form-field class="fullwidth">
            <mat-label>Catchphrases</mat-label>
            <textarea matInput
                      [(ngModel)]="catchphrases"
                      cdkTextareaAutosize
                      #autosize="cdkTextareaAutosize"
                      cdkAutosizeMinRows="3"
                      cdkAutosizeMaxRows="3"
                      (change)="changeCatchphrases($event)">
            </textarea>
          </mat-form-field>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [
    '.tablewidth { min-width: 800px; width: 100%;}',
    '.fullwidth { width: 100%; min-width: 150px;}',
    '.halfwidth { width: 100%; min-width: 100px;}',
  ]
})
export class CharacterPersonalityFieldComponent implements OnInit, DoCheck {
  attitude: string;
  beliefs: string;
  likes: string;
  dislikes: string;
  catchphrases: string;

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
    this.updateValues();
  }

  ngDoCheck(): void {
    this.updateValues();
  }

  updateValues = () => {
    this.attitude = this.character.attitude;
    this.beliefs = this.character.beliefs;
    this.likes = this.character.likes;
    this.dislikes = this.character.dislikes;
    this.catchphrases = this.character.catchphrases;
  }

  changeAttitude(event) {
    this.character.attitude = event.target.value;
  }

  changeBeliefs(event) {
    this.character.beliefs = event.target.value;
  }

  changeLikes(event) {
    this.character.likes = event.target.value;
  }

  changeDislikes(event) {
    this.character.dislikes = event.target.value;
  }

  changeCatchphrases(event) {
    this.character.catchphrases = event.target.value;
  }

}
