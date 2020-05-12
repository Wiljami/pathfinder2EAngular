import {Component, DoCheck, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-campaign-notes-field',
  template: `
    <h3>Campaign Notes</h3>
    <div class="row">
      <div class="column">
        <mat-form-field class="fullwidth">
          <mat-label>Notes</mat-label>
          <textarea matInput
                    [(ngModel)]="campaignNotes"
                    cdkTextareaAutosize
                    #autosize="cdkTextareaAutosize"
                    cdkAutosizeMinRows="17"
                    cdkAutosizeMaxRows="17"
                    (change)="changeCampaignNotes($event)">
        </textarea>
        </mat-form-field>
      </div>
      <div class="column">
        <mat-form-field class="fullwidth">
          <mat-label>Allies</mat-label>
          <textarea matInput
                    [(ngModel)]="allies"
                    cdkTextareaAutosize
                    #autosize="cdkTextareaAutosize"
                    cdkAutosizeMinRows="4"
                    cdkAutosizeMaxRows="4"
                    (change)="changeAllies($event)">
        </textarea>
        </mat-form-field>
        <mat-form-field class="fullwidth">
          <mat-label>Enemies</mat-label>
          <textarea matInput
                    [(ngModel)]="enemies"
                    cdkTextareaAutosize
                    #autosize="cdkTextareaAutosize"
                    cdkAutosizeMinRows="4"
                    cdkAutosizeMaxRows="4"
                    (change)="changeEnemies($event)">
        </textarea>
        </mat-form-field>
        <mat-form-field class="fullwidth">
          <mat-label>Organizations</mat-label>
          <textarea matInput
                    [(ngModel)]="organizations"
                    cdkTextareaAutosize
                    #autosize="cdkTextareaAutosize"
                    cdkAutosizeMinRows="4"
                    cdkAutosizeMaxRows="4"
                    (change)="changeOrganizations($event)">
        </textarea>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [
    '.tablewidth { min-width: 800px; width: 100%}',
    '.fullwidth { width: 100%; min-width: 150px;}',
    '.row {display: flex;}',
    '.column {flex: 50%; padding: 10px}'
  ]
})
export class CampaignNotesFieldComponent implements OnInit, DoCheck {
  campaignNotes: string;
  allies: string;
  enemies: string;
  organizations: string;

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
    this.updateValues();
  }

  ngDoCheck(): void {
    this.updateValues();
  }

  updateValues = () => {
    this.campaignNotes = this.character.campaignNotes;
    this.allies = this.character.allies;
    this.enemies = this.character.enemies;
    this.organizations = this.character.organizations;
  }

  changeCampaignNotes(event) {
    this.character.campaignNotes = event.target.value;
  }

  changeAllies(event) {
    this.character.allies = event.target.value;
  }

  changeEnemies(event) {
    this.character.enemies = event.target.value;
  }

  changeOrganizations(event) {
    this.character.organizations = event.target.value;
  }
}
