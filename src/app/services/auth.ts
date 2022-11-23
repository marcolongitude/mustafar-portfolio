import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { API_BASE_URL_LOGIN } from './constants'

export interface User {
    userName: string
    userEmail: string
}

export interface UserResponse {
    user: User
    accessToken: string
    authenticated: boolean
    message: string
    expiration: Date
    created: Date
}

export interface LoginRequest {
    email: string
    password: string
}

export const api = createApi({
    reducerPath: 'api_root',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL_LOGIN,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
})

export const { useLoginMutation } = api