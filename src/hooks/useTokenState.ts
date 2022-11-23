import { RootState } from '../app/store'

export const selectToken = (state: RootState): string | null => state.auth.accessToken;