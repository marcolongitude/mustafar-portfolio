export interface User {
    id: string
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