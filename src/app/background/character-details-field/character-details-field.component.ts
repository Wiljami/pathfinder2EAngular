import {Component, DoCheck, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-character-details-field',
  template: `
    <div class="tablewidth">
      <mat-grid-list cols="11" rowHeight="100px">
        <mat-grid-tile colspan="2">
          <mat-form-field class="halfwidth">
            <mat-label>Ethnicity</mat-label>
            <input type="text" [(ngModel)]="ethnicity" matInput (change)="changeEthnicity($event)">
          </mat-form-field>
        </mat-grid-tile>

        <mat-grid-tile colspan="2">
          <mat-form-field class="halfwidth">
            <mat-label>Nationality</mat-label>
            <input type="text" [(ngModel)]="nationality" matInput (change)="changeNationality($event)">
          </mat-form-field>
        </mat-grid-tile>

        <mat-grid-tile colspan="2">
          <mat-form-field class="halfwidth">
            <mat-label>Birthplace</mat-label>
            <input type="text" [(ngModel)]="birthplace" matInput (change)="changeBirthplace($event)">
          </mat-form-field>
        </mat-grid-tile>

        <mat-grid-tile colspan="1">
          <mat-form-field class="quarterwidth">
            <mat-label>Age</mat-label>
            <input type="text" [(ngModel)]="age" matInput (change)="changeAge($event)">
          </mat-form-field>
        </mat-grid-tile>

        <mat-grid-tile colspan="2">
          <mat-form-field class="halfwidth">
            <mat-label>Gender</mat-label>
            <input type="text" [(ngModel)]="gender" matInput (change)="changeGender($event)">
          </mat-form-field>
        </mat-grid-tile>

        <mat-grid-tile colspan="1">
          <mat-form-field class="quarterwidth">
            <mat-label>Height</mat-label>
            <input type="text" [(ngModel)]="height" matInput (change)="changeHeight($event)">
          </mat-form-field>
        </mat-grid-tile>

        <mat-grid-tile colspan="1">
          <mat-form-field class="quarterwidth">
            <mat-label>Weight</mat-label>
            <input type="text" [(ngModel)]="weight" matInput (change)="changeWeight($event)">
          </mat-form-field>
        </mat-grid-tile>

        <mat-grid-tile colspan="11" rowspan="1">
          <mat-form-field class="fullwidth">
            <mat-label>Appearance</mat-label>
            <textarea matInput
                      [(ngModel)]="appearance"
                      cdkTextareaAutosize
                      #autosize="cdkTextareaAutosize"
                      cdkAutosizeMinRows="3"
                      cdkAutosizeMaxRows="3"
                      (change)="changeAppearance($event)">
            </textarea>
          </mat-form-field>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [
    '.tablewidth { min-width: 800px; width: 100%}',
    '.fullwidth { width: 100%; min-width: 150px;}',
    '.halfwidth { width: 100%; min-width: 100px;}',
    '.quarterwidth { width: 100%; min-width: 50px;}'
  ]
})
export class CharacterDetailsFieldComponent implements OnInit, DoCheck {
  ethnicity: string;
  nationality: string;
  birthplace: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  appearance: string;

  constructor(public character: CharacterService) { }

  updateValues = () => {
    this.ethnicity = this.character.ethnicity;
    this.nationality = this.character.nationality;
    this.birthplace = this.character.birthplace;
    this.age = this.character.age;
    this.gender = this.character.gender;
    this.height = this.character.height;
    this.weight = this.character.weight;
    this.appearance = this.character.appearance;
  }

  ngOnInit(): void {
    this.updateValues();
  }

  ngDoCheck(): void {
    this.updateValues();
  }

  changeEthnicity(event) {
    this.character.ethnicity = event.target.value;
  }

  changeNationality(event) {
    this.character.nationality = event.target.value;
  }

  changeBirthplace(event) {
    this.character.birthplace = event.target.value;
  }

  changeAge(event) {
    this.character.age = event.target.value;
  }

  changeGender(event) {
    this.character.gender = event.target.value;
  }

  changeHeight(event) {
    this.character.height = event.target.value;
  }

  changeWeight(event) {
    this.character.weight = event.target.value;
  }

  changeAppearance(event) {
    this.character.appearance = event.target.value;
  }
}
