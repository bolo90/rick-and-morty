
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { BaseState } from '../../models/base-state.model';
import { ENDPOINTS } from '../../constants/endpoints';
import { CharacterModel } from '../../models/character.model';
import axios from 'axios';
import { ApiModel, FilterParams } from '../../models/api.model';

export interface CharacterIState extends BaseState {
  characters: ApiModel<CharacterModel[]> | undefined;
}

const initialState: CharacterIState = {
  loading: false,
  loaded: false,
  characters: undefined,
  error: undefined
};

export const getAllCharacter = createAsyncThunk(
  'character/get-all',
  async (filters?: FilterParams): Promise<ApiModel<CharacterModel[]>> => {
    const { data } = await axios.get(ENDPOINTS.CHARACTERS.CHARACTERS, { params: filters });
    return data;
  }
);

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacter.pending, (state) => {
        state.loading = true;
        state.loaded = false;
        state.error = undefined;
      })
      .addCase(getAllCharacter.fulfilled, (state, { payload }) => {
        state.loaded = true;
        state.loading = false;
        if (state.characters?.results)
          state.characters = { info: payload.info, results: [...state.characters.results, ...payload.results] };
        else
          state.characters = payload
        state.error = undefined;
      })
      .addCase(getAllCharacter.rejected, (state, action) => {
        state.loaded = true;
        state.loading = false;
        state.characters = undefined;
        state.error = action.payload;
      });
  },
});

export const characterState = (state: RootState) => state.characterState;

export default characterSlice.reducer;