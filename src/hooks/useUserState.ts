import { User } from '../app/interfaces/authInterfaces';
import { RootState } from '../app/store'

export const selectUser = (state: RootState): User | null => state.auth.user;