import IUser from "./IUser";

export default interface ISearchResult {
    topics: string[],
    users: IUser[]
}