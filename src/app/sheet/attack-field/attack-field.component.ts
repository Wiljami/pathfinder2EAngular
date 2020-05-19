import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Feat} from '../../services/Feat';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-attack-field',
  template: `
    <h1>Attacks field</h1>

    <button mat-stroked-button type="button" (click)="addAttack()">Add Attack</button>
    <button mat-stroked-button type="button" (click)="lockSheet()">{{lockButtonText}}</button>

    <div cdkDropListDisabled="{{listLocked}}" cdkDropList (cdkDropListDropped)="drop($event)">
      <div cdkDrag [cdkDragData]="attack" *ngFor="let attack of character.attacks">
        <app-attack [attack]="attack" [callBack]="removeAttack" [locked]="listLocked"></app-attack>
      </div>
    </div>
  `
})
export class AttackFieldComponent implements OnInit {
  listLocked = true;
  lockButtonText = 'Unlock list';

  constructor(public character: CharacterService) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.character.attacks, event.previousIndex, event.currentIndex);
  }

  addAttack() {
    this.character.attacks.push({name : 'New Attack', description: '', traits: ''});
  }

  lockSheet() {
    this.lockButtonText = this.listLocked ? 'Lock list' : 'Unlock list';
    this.listLocked = !this.listLocked;
  }

  removeAttack = (attack) => {
    const index = this.character.attacks.indexOf(attack);
    this.character.attacks.splice(index, 1);
  }

}
