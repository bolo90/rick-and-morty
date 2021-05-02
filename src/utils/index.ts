export const getEpisodesNumber = (episodes: string[]) => {
  return episodes.map(episode => episode.replace('https://rickandmortyapi.com/api/episode/', ''));
};

export const getCharactersNumber = (characters: string[]) => {
  return characters.map(character => character.replace('https://rickandmortyapi.com/api/character/', ''));
};