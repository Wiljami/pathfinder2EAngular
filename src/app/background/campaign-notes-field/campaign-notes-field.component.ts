import {Component, DoCheck, OnInit} from '@angular/core';

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
  campaignNotes = 'hellurei';
  allies = 'allies';
  enemies = 'enemies';
  organizations = 'orgs';

  constructor() { }

  ngOnInit(): void {
    this.updateValues();
  }

  ngDoCheck(): void {
    this.updateValues();
  }

  updateValues = () => {
    this.campaignNotes = this.campaignNotes;
    this.allies = this.allies;
    this.enemies = this.enemies;
    this.organizations = this.organizations;
  }

  changeCampaignNotes(event) {
    this.campaignNotes = event.target.value;
  }

  changeAllies(event) {
    this.allies = event.target.value;
  }

  changeEnemies(event) {
    this.enemies = event.target.value;
  }

  changeOrganizations(event) {
    this.organizations = event.target.value;
  }
}
