import { Injectable } from '@angular/core';
import { AbilityScore } from './AbilityScore';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  name = '';

  str = new AbilityScore('Strength', 10);
  dex = new AbilityScore('Dexterity', 10);
  con = new AbilityScore('Constitution', 10);
  int = new AbilityScore('Intelligence', 10);
  wis = new AbilityScore('Wisdom', 10);
  cha = new AbilityScore('Charisma', 10);

  constructor() { }
}
