import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { api } from './services/auth'
import { apiPosts } from './services/posts'
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import postsReducer from '../features/posts/PostSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [apiPosts.reducerPath]: apiPosts.reducer,
    counter: counterReducer,
    auth: authReducer,
    posts: postsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, apiPosts.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


