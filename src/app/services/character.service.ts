import { Injectable } from '@angular/core';
import { AbilityScore } from './AbilityScore';
import {Skill} from './Skill';
import {SavingThrow} from './SavingThrow';
import {CharData, SkillData} from './CharData';
import {Feat} from './Feat';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  name = '';
  class = '';
  ancestry = '';
  playerName = '';
  deity = '';
  background = '';
  alignment = '';
  size = '';
  traits = '';
  level = 1;
  image = '';

  ethnicity = '';
  nationality = '';
  birthplace = '';
  age = '';
  gender = '';
  height = '';
  weight = '';
  appearance = '';

  attitude = '';
  beliefs = '';
  likes = '';
  dislikes = '';
  catchphrases = '';

  campaignNotes = '';
  allies = '';
  enemies = '';
  organizations = '';

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

  ancestryFeats: Feat[] = [
    { name: 'placeholder ancestry feat', type: 'placeholder type', description: 'placeholder description'}
  ];

  skillFeats: Feat[] = [
    { name: 'placeholder skill feat', type: 'placeholder type', description: 'placeholder description'}
  ];

  generalFeats: Feat[] = [
    { name: 'placeholder general feat', type: 'placeholder type', description: 'placeholder description'}
  ];

  classFeats: Feat[] = [
    { name: 'placeholder class feat', type: 'placeholder type', description: 'placeholder description'}
  ];

  bonusFeats: Feat[] = [
    { name: 'placeholder bonus feat', type: 'placeholder type', description: 'placeholder description'}
  ];

  constructor() { }

  exportCharacter(): CharData {
    const skills: SkillData[] = [];
    this.skills.forEach((skill) => {
      skills.push({name: skill.name, prof: skill.prof, stat: skill.stat.name});
    });

    const charData: CharData = {
      name: this.name,
      playerName: this.playerName,

      class: this.class,
      ancestry: this.ancestry,
      deity: this.deity,
      background: this.background,
      alignment: this.alignment,
      size: this.size,
      traits: this.traits,

      ethnicity: this.ethnicity,
      nationality: this.nationality,
      birthplace: this.birthplace,
      age: this.age,
      gender: this.gender,
      height: this.height,
      weight: this.weight,
      appearance: this.appearance,

      attitude: this.attitude,
      beliefs: this.beliefs,
      likes: this.likes,
      dislikes: this.dislikes,
      catchphrases: this.catchphrases,

      campaignNotes: this.campaignNotes,
      allies: this.allies,
      enemies: this.enemies,
      organizations: this.organizations,

      image: this.image,
      level: this.level,

      str: this.str.value,
      dex: this.dex.value,
      con: this.con.value,
      int: this.int.value,
      wis: this.wis.value,
      cha: this.cha.value,

      willSave: {prof: this.willSave.prof, item: this.willSave.item},
      fortSave: {prof: this.fortSave.prof, item: this.fortSave.item},
      refSave: {prof: this.refSave.prof, item: this.refSave.item},

      skills,

      ancestryFeats: this.ancestryFeats,
      skillFeats: this.skillFeats,
      generalFeats: this.generalFeats,
      classFeats: this.classFeats,
      bonusFeats: this.bonusFeats
    };

    return charData;
  }

  importCharacter(charData: CharData) {
    this.name = charData.name;
    this.playerName = charData.playerName;

    this.class = charData.class;
    this.ancestry = charData.ancestry;
    this.deity = charData.deity;
    this.background = charData.background;
    this.alignment = charData.alignment;
    this.size = charData.size;
    this.traits = charData.traits;

    this.ethnicity = charData.ethnicity;
    this.nationality = charData.nationality;
    this.birthplace = charData.birthplace;
    this.age = charData.age;
    this.gender = charData.gender;
    this.height = charData.height;
    this.weight = charData.weight;
    this.appearance = charData.appearance;

    this.attitude = charData.attitude;
    this.beliefs = charData.beliefs;
    this.likes = charData.likes;
    this.dislikes = charData.dislikes;
    this.catchphrases = charData.catchphrases;

    this.campaignNotes = charData.campaignNotes;
    this.allies = charData.allies;
    this.enemies = charData.enemies;
    this.organizations = charData.organizations;

    this.image = charData.image;
    this.level = charData.level;

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

    this.ancestryFeats = charData.ancestryFeats;
    this.skillFeats = charData.skillFeats;
    this.generalFeats = charData.generalFeats;
    this.classFeats = charData.classFeats;
    this.bonusFeats = charData.bonusFeats;

    this.str.updateValue(charData.str);
    this.dex.updateValue(charData.dex);
    this.con.updateValue(charData.con);
    this.int.updateValue(charData.int);
    this.wis.updateValue(charData.wis);
    this.cha.updateValue(charData.cha);
  }
}
