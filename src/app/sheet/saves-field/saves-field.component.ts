import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-saves-field',
  template: `
    <h1>Saving Throws</h1>
    <app-saving-throw [save]="character.fortSave"></app-saving-throw>
    <app-saving-throw [save]="character.refSave"></app-saving-throw>
    <app-saving-throw [save]="character.willSave"></app-saving-throw>
  `
})
export class SavesFieldComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
