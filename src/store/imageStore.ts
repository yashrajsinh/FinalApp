import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '@/redux/reduxSlice';

const imageStore = configureStore({
  reducer: {
    userProfile: imageReducer,
  },
});

export default imageStore;
