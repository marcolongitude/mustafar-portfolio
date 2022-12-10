import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserResponse } from '../interfaces/usersInterfaces'
import { API_BASE_URL } from '../constants'

export const apiUser = createApi({
    reducerPath: 'api_root_user',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token')
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        getUser: builder.query<UserResponse, string>({
            query: (idUser) => `/users/${idUser}`,
            providesTags: ['user'],
        }),
    }),
})

export const { useGetUserQuery } = apiUser