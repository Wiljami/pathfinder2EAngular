import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-image-field',
  template: `
    <h2>Image field</h2>
    <img src="{{character.image}}" alt="Character Art">   `
})
export class ImageFieldComponent implements OnInit {
  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

}
