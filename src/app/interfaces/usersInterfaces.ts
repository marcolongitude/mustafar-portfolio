export interface UserResponse {
    name: string
    email: string
    cel: string
    permission: "admin" | "common" | undefined
    createAt: string
}