import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { PostsResponse } from '../../app/interfaces/postsInterfaces'
import type { RootState } from '../../app/store'

type PostState = {
    posts: PostsResponse | null
    accessToken: string | null
}

let initialState: PostState = {
    posts: null,
    accessToken: null
}

const slice = createSlice({
    name: 'allPosts',
    initialState,
    reducers: {
        setAllPosts: (
            state,
            { payload: { posts } }: PayloadAction<{ posts: PostsResponse }>
        ) => {
            state.posts = posts
        },
    },
})

export const { setAllPosts } = slice.actions

export default slice.reducer

export const listAllPosts = (state: RootState) => state.posts.posts
