import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { api } from './services/auth'
import { apiPosts } from './services/posts'
import authReducer from '../features/auth/authSlice'
import postsReducer from '../features/posts/PostSlice'
import { apiUser } from './services/user';
import { rtkQueryErrorLogger } from './services/errorHandling'

export const store = configureStore({
  reducer: {
        [api.reducerPath]: api.reducer,
        [apiPosts.reducerPath]: apiPosts.reducer,
        [apiUser.reducerPath]: apiUser.reducer,
        auth: authReducer,
        posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger, api.middleware, apiUser.middleware, apiPosts.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


