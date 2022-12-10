export interface CreatePostResponse {
    name: string
    description: string
    userId: string
}

export interface CreatePostRequest {
    userId: string
    name: string
    description: string
}

export interface Post {
    id: string
    name: string
    description: string
    userId: string
    createAt: string
}

export type PostsResponse = Post[]
