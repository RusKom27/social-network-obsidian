interface IPost {
    _id: string;
    author_id: string;
    text: string;
    image: string;
    tags: string[]
    likes: string[];
    views: string[];
    creation_date: Date;
}

export default IPost;