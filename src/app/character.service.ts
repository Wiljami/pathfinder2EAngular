import { Injectable } from '@angular/core';
import { AbilityScore } from './interface/AbilityScore';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  name = '';

  str: AbilityScore = {
    modifier: 0, name: 'Strength', value: 10
  };

  dex: AbilityScore = {
    modifier: 0, name: 'Dexterity', value: 10
  };

  con: AbilityScore = {
    modifier: 0, name: 'Constitution', value: 10
  };

  int: AbilityScore = {
    modifier: 0, name: 'Intelligence', value: 10
  };

  wis: AbilityScore = {
    modifier: 0, name: 'Wisdom', value: 10
  };

  cha: AbilityScore = {
    modifier: 0, name: 'Charisma', value: 10
  };

  constructor() { }
}
