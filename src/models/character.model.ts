import { EpisodeModel } from './episode.model';

export interface CharacterModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginLocationModel;
  location: OriginLocationModel;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface CharacterDetailModel extends CharacterModel {
  episodesDetail?: Array<EpisodeModel>;
}

export interface OriginLocationModel {
  name: string;
  url: string;
}