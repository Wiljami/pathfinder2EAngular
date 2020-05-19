import {Feat} from './Feat';
import {Attack} from './Attack';

export interface CharData {
  name: string;
  playerName: string;

  class: string;
  ancestry: string;
  deity: string;
  background: string;
  alignment: string;
  size: string;
  traits: string;

  ethnicity: string;
  nationality: string;
  birthplace: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  appearance: string;

  attitude: string;
  beliefs: string;
  likes: string;
  dislikes: string;
  catchphrases: string;

  campaignNotes: string;
  allies: string;
  enemies: string;
  organizations: string;

  image: string;
  level: number;

  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;

  willSave: SaveData;
  fortSave: SaveData;
  refSave: SaveData;

  spellAttackProf: number;
  spellAttackStat: string;
  spellDCProf: number;
  spellDCStat: string;

  attacks: Attack[];

  skills: SkillData[];

  ancestryFeats: Feat[];
  skillFeats: Feat[];
  generalFeats: Feat[];
  classFeats: Feat[];
  bonusFeats: Feat[];
}

export interface SaveData {
  prof: number;
  item: number;
}

export interface SkillData {
  name: string;
  prof: number;
  stat: string;
}
