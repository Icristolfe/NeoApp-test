import { createSlice } from '@reduxjs/toolkit';

const comicSlice = createSlice({
  name: 'comics',
  initialState: {
    list: [],
    selectedComic: null
  },
  reducers: {
    setComics: (state, action) => {
      state.list = action.payload;
    }, 
    setSelectedComic: (state, action) => {
      state.selectedComic = action.payload;
    },
  }
});

export const { setComics, setSelectedComic } = comicSlice.actions;
export default comicSlice.reducer;
