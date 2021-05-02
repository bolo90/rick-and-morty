import { EpisodeModel } from './../../models/episode.model';
import { BaseState } from '../../models/base-state.model';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { CharacterDetailModel, CharacterModel } from '../../models/character.model';
import { getEpisodesNumber } from '../../utils';
import { ENDPOINTS } from '../../constants/endpoints';

type ModalType = 'location' | 'characterDetail' | undefined;
export interface ModalIState extends BaseState {
  show: boolean;
  type: ModalType;
  resource: any;
  characterDetail: CharacterDetailModel | undefined;
}

const initialState: ModalIState = {
  loading: false,
  loaded: true,
  error: undefined,
  show: false,
  type: undefined,
  resource: undefined,
  characterDetail: undefined
};

export const fetchDetails = createAsyncThunk(
  'modal/fetch-details',
  async (payload: { type: ModalType, resource: CharacterModel}, { dispatch }): Promise<EpisodeModel[]> => {
    dispatch(openModal(payload.type));
    dispatch(setCharacterDetails(payload.resource));
    const episodesNumber = getEpisodesNumber(payload.resource.episode);
    const { data } = await axios.get(`${ENDPOINTS.EPISODES.EPISODES}/${episodesNumber.join(',')}`);
    if (episodesNumber.length === 1) return [data];
    return data;
  }
);
export const fetchResource = createAsyncThunk(
  'modal/fetch-resource',
  async (payload: { type: ModalType, resource: string }, { dispatch }): Promise<any> => {
    dispatch(openModal(payload.type));
    const { data } = await axios.get(payload.resource);
    return data;
  }
);

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setCharacterDetails(state, action: PayloadAction<CharacterModel>) {
      state.characterDetail = action.payload;
    },
    openModal(state, action: PayloadAction<ModalType>) {
      document.body.style.overflowY = 'hidden';
      state.type = action.payload;
      state.show = true;
    },
    closeModal(state) {
      document.body.style.overflowY = 'auto';
      state.type = undefined;
      state.resource = undefined;
      state.show = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResource.pending, (state) => {
        state.loading = true;
        state.loaded = false;
        state.resource = undefined;
        state.error = undefined;
      })
      .addCase(fetchResource.fulfilled, (state, action) => {
        state.loaded = true;
        state.loading = false;
        state.resource = action.payload;
        state.error = undefined;
      })
      .addCase(fetchResource.rejected, (state, action) => {
        state.loaded = true;
        state.loading = false;
        state.resource = undefined;
        state.error = action.payload;
      })
      .addCase(fetchDetails.pending, (state) => {
        state.loading = true;
        state.loaded = false;
        state.error = undefined;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.loaded = true;
        state.loading = false;
        if (state.characterDetail) state.characterDetail.episodesDetail = action.payload;
        state.error = undefined;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.loaded = true;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const modalState = (state: RootState) => state.modalState;
export const { openModal, closeModal, setCharacterDetails } = modalSlice.actions;
export default modalSlice.reducer;