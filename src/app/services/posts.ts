import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './constants'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export interface Post {
    id: string
    name: string
    description: string
    userId: string
    createAt: string
}

export type PostsResponse = Post[]

export type errorQuery = FetchBaseQueryError

export const apiPosts = createApi({
    reducerPath: 'api_root_posts',
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
    tagTypes: ['allPosts'],
    endpoints: (builder) => ({
        getAllPosts: builder.query<PostsResponse, void>({
            query: () => '/post',
            providesTags: ['allPosts'],
        }),
    }),
})

export const { useGetAllPostsQuery } = apiPosts