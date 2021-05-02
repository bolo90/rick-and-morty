import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from "../store/character/characterSlice";
import episodeReducer from "../store/episode/episodeSlice";
import modalReducer from "../store/modal/modalSlice";

export const store = configureStore({
  reducer: {
    characterState: characterReducer,
    episodeState: episodeReducer,
    modalState: modalReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;