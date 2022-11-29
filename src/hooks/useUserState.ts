import { RootState } from '../app/store'

export const selectUser = (state: RootState): string | null => state.auth.accessToken;