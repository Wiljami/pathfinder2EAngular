import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-control-panel',
  template: `
    <button type="button" (click)="exportCharacter()">Export Character</button>
    <button type="button" (click)="fileInput.click()">
      <span>Import Character</span>
      <input #fileInput type="file" (change)="importCharacter($event)" style="display:none;" />
    </button>
  `
})
export class ControlPanelComponent implements OnInit {

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

  exportCharacter() {
    const fileName = 'character';
    const json = JSON.stringify(this.character);
    const blob = new Blob([json], {type: 'application/json'});
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.chr';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  importCharacter(event) {
    console.log(event.target.files);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const content = fileReader.result as string;
      console.log(JSON.parse(content));
    };

    fileReader.onerror = (error) => {
      console.log(error);
    };

    fileReader.readAsText(event.target.files[0]);
  }
}
