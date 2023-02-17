
export type AuthResponseData = {access_token: string, refresh_token: string, user_id: string}
export type Topic = {value: string, count: number};
export type PostRequestQuery = {
    author_id?: string
    text?: string
    likes?: string
    sort_by_popularity?: "ascending" | "descending"
    sort_by_relevance?: "ascending" | "descending"
}
