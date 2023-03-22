import { createSlice } from '@reduxjs/toolkit';

const comicSlice = createSlice({
  name: 'comics',
  initialState: [],
  reducers: {
    setComics: (state, action) => {
      return action.payload;
    }
  }
});

export const { setComics } = comicSlice.actions;
export default comicSlice.reducer;
