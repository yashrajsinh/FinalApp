import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '@/services/redux/reduxSlice';

const imageStore = configureStore({
  reducer: {
    userProfile: imageReducer,
  },
});

export default imageStore;
