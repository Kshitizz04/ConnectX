import { configureStore } from '@reduxjs/toolkit';
import userPreferencefReducer from './features/userPreferenceSlice'

export const store = configureStore({
  reducer: {
    userPreference: userPreferencefReducer,
  },
});
