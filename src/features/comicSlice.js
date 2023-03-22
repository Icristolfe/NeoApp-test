import { createSlice } from '@reduxjs/toolkit';

const comicSlice = createSlice({
  name: 'comics',
  initialState: [],
  reducers: {
    setComics: (state, action) => {
      return action.payload;
    }, 
    setSelectedComic: (state, action) => {
      state.selectedComic = action.payload;
    },
  }
});

export const setSelectedComic = (comic) => ({
  type: 'comic/setSelectedComic',
  payload: comic,
});


export const { setComics } = comicSlice.actions;
export default comicSlice.reducer;
