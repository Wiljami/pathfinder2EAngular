import { Injectable } from '@angular/core';
import { Character } from './Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  name = '';
  str = 10;
  dex = 10;
  con = 10;
  int = 10;
  wis = 10;
  cha = 10;

  constructor() { }
}
