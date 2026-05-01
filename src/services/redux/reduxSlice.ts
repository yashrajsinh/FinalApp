import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageUrl: null, //default empty image
};

const imageSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setImage(state, action) {
      state.imageUrl = action.payload; //URL string
    },
    clearImage(state) {
      state.imageUrl = null;
    },
  },
});
export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
