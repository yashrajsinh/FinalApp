import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '@/store/slices/imageSlice';

const imageStore = configureStore({
  reducer: {
    userProfile: imageReducer,
  },
});

export default imageStore;
