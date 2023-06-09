import { configureStore } from '@reduxjs/toolkit';
import comicsReducer from './ComicSlice';

const store = configureStore({
  reducer: {
    comics: comicsReducer
  }
});

export default store;
