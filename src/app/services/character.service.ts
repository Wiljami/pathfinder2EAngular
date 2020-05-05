import { Injectable } from '@angular/core';
import { AbilityScore } from './AbilityScore';
import {SavingThrow} from './SavingThrow';
import {CharData, SkillData} from './CharData';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  str = new AbilityScore('Strength', 10);
  dex = new AbilityScore('Dexterity', 10);
  con = new AbilityScore('Constitution', 10);
  int = new AbilityScore('Intelligence', 10);
  wis = new AbilityScore('Wisdom', 10);
  cha = new AbilityScore('Charisma', 10);

  data: CharData = {
    name: '',
    playerName: '',

    class: '',
    ancestry: '',
    deity: '',
    background: '',
    alignment: '',
    size: '',
    traits: '',

    image: '',
    level: 1,

    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,

    willSave: {prof: 0, item: 0},
    fortSave: {prof: 0, item: 0},
    refSave: {prof: 0, item: 0},

    skills: [
      { name: 'placeholder STR skill', stat: this.str, prof: 2 },
      { name: 'placeholder DEX skill', stat: this.dex, prof: 4 },
      { name: 'placeholder CON skill', stat: this.con, prof: 6 },
      { name: 'placeholder INT skill', stat: this.int, prof: 8 },
      { name: 'placeholder WIS skill', stat: this.wis, prof: 2 },
      { name: 'placeholder CHA skill', stat: this.cha, prof: 4 }
    ]
  };

  fortSave: SavingThrow = {
    name: 'Fortitude',
    prof: this.data.fortSave.prof,
    item: this.data.fortSave.item,
    stat: this.con
  };

  refSave: SavingThrow = {
    name: 'Reflex',
    prof: this.data.refSave.prof,
    item: this.data.refSave.item,
    stat: this.dex
  };

  willSave: SavingThrow = {
    name: 'Will',
    prof: this.data.willSave.prof,
    item: this.data.willSave.item,
    stat: this.wis
  };

  constructor() { }

  exportCharacter(): CharData {
    return this.data;
  }

  importCharacter = (charData: CharData) => {
    this.data = charData;
  }
}
