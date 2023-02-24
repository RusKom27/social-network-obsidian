
export type AuthResponseData = {access_token: string, refresh_token: string, user_id: string}
export type PostRequestQuery = {
    author_id?: string
    text?: string
    likes?: string
    follows?: string
    sort_by_popularity?: "ascending" | "descending"
    sort_by_relevance?: "ascending" | "descending"
};

export type UserRequestQuery = {
    login?: string
    name?: string
    subscribers?: string
    sort_by_popularity?: "ascending" | "descending"
};

export type TopicRequestQuery = {
    name?: string
    sort_by_popularity?: "ascending" | "descending"
};

export type MessageRequestQuery = {
    limit?: number
    sort_by_relevance?: "ascending" | "descending"
};
