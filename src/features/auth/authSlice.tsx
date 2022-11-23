import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../app/services/auth'
import type { RootState } from '../../app/store'

type AuthState = {
    user: User | null
    accessToken: string | null
}

let initialState: AuthState = {
    user: null,
    accessToken: null
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            { payload: { user, accessToken } }: PayloadAction<{ user: User; accessToken: string }>
        ) => {
            state.user = user
            state.accessToken = accessToken
            localStorage.setItem("token", accessToken)
        },
        logout: (
            state,
        ) => {
            state.user = initialState.user
            state.accessToken = initialState.accessToken
            localStorage.removeItem("token")
        },
    },
})

export const { setCredentials, logout } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectAccessTokenUser = (state: RootState) => state.auth.accessToken


