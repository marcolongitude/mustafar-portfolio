import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './constants'

console.log(API_BASE_URL)

export interface Post {
    id: string
    name: string
    description: string
    userId: string
    createAt: string
}

export type PostsResponse = Post[]

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