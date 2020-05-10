import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {MatDialog} from '@angular/material/dialog';
import {ImageDialogComponent} from './image-dialog/image-dialog.component';

@Component({
  selector: 'app-image-field',
  template: `
    <div class="centerImage">
      <img class="charImage" [matMenuTriggerFor]="menu" src="{{character.image}}" alt="Click to add Character Image">
    </div>
    <mat-menu #menu="matMenu" yPosition="above">
      <button mat-menu-item (click)="addImage()">Change image</button>
      <button mat-menu-item (click)="removeImage()">Remove image</button>
    </mat-menu>
  `,
  styles: [
    '.charImage { max-width: 400px; max-height: 400px; cursor: pointer}',
    '.centerImage { text-align: center}'
  ]
})
export class ImageFieldComponent implements OnInit {
  constructor(public character: CharacterService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addImage() {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '400px',
      data: {image: this.character.image}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.character.image = result;
    });
  }

  removeImage() {
    this.character.image = '';
  }

}
