import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { CreatePostRequest, CreatePostResponse } from '../interfaces/postsInterfaces'
import { API_BASE_URL } from '../constants'



export const api = createApi({
    reducerPath: 'api_root_create_posts',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        createPost: builder.mutation<CreatePostResponse, CreatePostRequest>({
            query: (payload) => ({
                url: 'post',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
})

export const { useCreatePostMutation } = api