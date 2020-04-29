export interface CharData {
  name: string;
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

  skills: SkillData[];
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
