import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from './DialogData';

@Component({
  selector: 'app-image-dialog',
  template: `
    <h1 mat-dialog-title>Character Image</h1>
    <div mat-dialog-content>
      <p>For best result use 350px by 350px image.</p>
      <mat-form-field>
        <mat-label>Character Image Url</mat-label>
        <input matInput [(ngModel)]="data.image">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.image" cdkFocusInitial>Ok</button>
    </div>
  `
})
export class ImageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
