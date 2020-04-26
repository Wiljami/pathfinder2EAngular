import { Injectable } from '@angular/core';
import { AbilityScore } from './AbilityScore';
import {Skill} from './Skill';
import {SavingThrow} from './SavingThrow';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  name = '';
  level = 1;

  str = new AbilityScore('Strength', 10);
  dex = new AbilityScore('Dexterity', 10);
  con = new AbilityScore('Constitution', 10);
  int = new AbilityScore('Intelligence', 10);
  wis = new AbilityScore('Wisdom', 10);
  cha = new AbilityScore('Charisma', 10);

  fortSave: SavingThrow = {
    name: 'Fortitude',
    prof: 2,
    item: 0,
    stat: this.con
  };

  refSave: SavingThrow = {
    name: 'Reflex',
    prof: 2,
    item: 0,
    stat: this.dex
  };

  willSave: SavingThrow = {
    name: 'Will',
    prof: 2,
    item: 0,
    stat: this.wis
  };

  strSkill: Skill = {
    name: 'placeholder STR skill',
    stat: this.str,
    prof: 2
  };

  dexSkill: Skill = {
    name: 'placeholder DEX skill',
    stat: this.dex,
    prof: 4
  };

  conSkill: Skill = {
    name: 'placeholder CON skill',
    stat: this.con,
    prof: 6
  };

  intSkill: Skill = {
    name: 'placeholder INT skill',
    stat: this.int,
    prof: 8
  };

  wisSkill: Skill = {
    name: 'placeholder WIS skill',
    stat: this.wis,
    prof: 2
  };

  chaSkill: Skill = {
    name: 'placeholder CHA skill',
    stat: this.cha,
    prof: 4
  };

  constructor() { }
}
