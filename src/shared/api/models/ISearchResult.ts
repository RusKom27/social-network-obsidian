import IUser from "./IUser";

interface ISearchResult {
    topics: string[],
    users: IUser[]
}

export default ISearchResult;