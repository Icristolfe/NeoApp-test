import { configureStore } from '@reduxjs/toolkit';
import comicsReducer from './comicSlice';

const store = configureStore({
  reducer: {
    comics: comicsReducer
  }
});

export default store;
