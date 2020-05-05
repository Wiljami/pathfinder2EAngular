import {Skill} from './Skill';

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

  image: string;
  level: number;

  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  willSave: SaveData;
  fortSave: SaveData;
  refSave: SaveData;

  skills: Skill[];
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
