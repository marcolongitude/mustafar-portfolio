import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../app/services/auth'
import type { RootState } from '../../app/store'

type AuthState = {
    user: User | null
    accessToken: string | null
}

const slice = createSlice({
    name: 'auth',
    initialState: { user: null, accessToken: null } as AuthState,
    reducers: {
        setCredentials: (
            state,
            { payload: { user, accessToken } }: PayloadAction<{ user: User; accessToken: string }>
        ) => {
            state.user = user
            state.accessToken = accessToken
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
