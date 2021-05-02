import { EpisodeDetailModel, EpisodeModel } from './../../models/episode.model';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { BaseState } from '../../models/base-state.model';
import { ENDPOINTS } from '../../constants/endpoints';
import axios from 'axios';
import { ApiModel } from '../../models/api.model';
import { getCharactersNumber } from '../../utils';

export interface EpisodeIState extends BaseState {
  episodes: ApiModel<EpisodeDetailModel[]> | undefined;
  loadingDetail: boolean;
  loadedDetail: boolean;
}

const initialState: EpisodeIState = {
  loading: false,
  loadingDetail: false,
  loadedDetail: false,
  loaded: false,
  episodes: undefined,
  error: undefined
};

export const getAllEpisodes = createAsyncThunk(
  'episode/get-all',
  async (): Promise<ApiModel<EpisodeDetailModel[]>> => {
    const { data } = await axios.get(ENDPOINTS.EPISODES.EPISODES);
    return data;
  }
);

export const getAllEpisodeCharacters = createAsyncThunk(
  'episode/get-all-characters',
  async (payload: EpisodeDetailModel): Promise<EpisodeDetailModel> => {
    const charactersNumber = getCharactersNumber(payload.characters);
    const { data } = await axios.get(`${ENDPOINTS.CHARACTERS.CHARACTERS}/${charactersNumber.join(',')}`);
    const episode: EpisodeDetailModel = { ...payload, charactersDetail: charactersNumber.length === 1 ? [data] : data };
    return episode;
  }
);

export const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEpisodes.pending, (state) => {
        state.loading = true;
        state.loaded = false;
        state.error = undefined;
        state.episodes = undefined;
      })
      .addCase(getAllEpisodes.fulfilled, (state, action) => {
        state.loaded = true;
        state.loading = false;
        state.episodes = action.payload;
        state.error = undefined;
      })
      .addCase(getAllEpisodes.rejected, (state, action) => {
        state.loaded = true;
        state.loading = false;
        state.episodes = undefined;
        state.error = action.payload;
      })
      .addCase(getAllEpisodeCharacters.pending, (state) => {
        state.loadingDetail = true;
        state.loadedDetail = false;
        state.error = undefined;
      })
      .addCase(getAllEpisodeCharacters.fulfilled, (state, action) => {
        state.loadedDetail = true;
        state.loadingDetail = false;
        if (state.episodes?.results) {
          const episodeIndex = state.episodes.results.findIndex(el => el.id === action.payload.id);
          state.episodes.results[episodeIndex] = action.payload;
        }
        state.error = undefined;
      })
      .addCase(getAllEpisodeCharacters.rejected, (state, action) => {
        state.loadedDetail = true;
        state.loadingDetail = false;
        state.episodes = undefined;
        state.error = action.payload;
      })
  },
});

export const episodeState = (state: RootState) => state.episodeState;

export default episodeSlice.reducer;