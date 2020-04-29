import { Injectable } from '@angular/core';
import { AbilityScore } from './AbilityScore';
import {Skill} from './Skill';
import {SavingThrow} from './SavingThrow';
import {CharData, SkillData} from './CharData';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  name = '';
  level = 1;
  image = '';

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

  skills: Skill[] = [
    { name: 'placeholder STR skill', stat: this.str, prof: 2 },
    { name: 'placeholder DEX skill', stat: this.dex, prof: 4 },
    { name: 'placeholder CON skill', stat: this.con, prof: 6 },
    { name: 'placeholder INT skill', stat: this.int, prof: 8 },
    { name: 'placeholder WIS skill', stat: this.wis, prof: 2 },
    { name: 'placeholder CHA skill', stat: this.cha, prof: 4 }
  ];

  constructor() { }

  exportCharacter(): CharData {
    const skills: SkillData[] = [];
    this.skills.forEach((skill) => {
      skills.push({name: skill.name, prof: skill.prof, stat: skill.stat.name});
    });

    const charData: CharData = {
      str: this.str.value,
      dex: this.dex.value,
      con: this.con.value,
      int: this.int.value,
      wis: this.wis.value,
      cha: this.cha.value,

      willSave: {prof: this.willSave.prof, item: this.willSave.item},
      fortSave: {prof: this.fortSave.prof, item: this.fortSave.item},
      refSave: {prof: this.refSave.prof, item: this.refSave.item},

      skills
    };

    return charData;
  }

  importCharacter(charData: CharData) {
    this.skills = [];
    charData.skills.forEach((skillData) => {
      const skill: Skill = {name: skillData.name, prof: skillData.prof, stat: null};
      switch (skillData.stat) {
        case this.str.name:
          skill.stat = this.str;
          break;
        case this.dex.name:
          skill.stat = this.dex;
          break;
        case this.con.name:
          skill.stat = this.con;
          break;
        case this.int.name:
          skill.stat = this.int;
          break;
        case this.wis.name:
          skill.stat = this.wis;
          break;
        case this.cha.name:
          skill.stat = this.cha;
          break;
      }
      this.skills.push(skill);
    });
    this.willSave.prof = charData.willSave.prof;
    this.willSave.item = charData.willSave.item;

    this.fortSave.prof = charData.fortSave.prof;
    this.fortSave.item = charData.fortSave.item;

    this.refSave.prof = charData.refSave.prof;
    this.refSave.item = charData.refSave.item;

    this.str.updateValue(charData.str);
    this.dex.updateValue(charData.dex);
    this.con.updateValue(charData.con);
    this.int.updateValue(charData.int);
    this.wis.updateValue(charData.wis);
    this.cha.updateValue(charData.cha);


  }
}
