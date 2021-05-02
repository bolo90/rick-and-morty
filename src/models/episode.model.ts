import { CharacterModel } from './character.model';

export interface EpisodeModel {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export interface EpisodeDetailModel extends EpisodeModel {
  charactersDetail: CharacterModel[];
}