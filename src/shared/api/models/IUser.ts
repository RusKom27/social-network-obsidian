interface IUser {
    _id: string;
    name: string;
    login: string;
    email: string;
    password: string;
    description: string;
    creation_date: Date;
    subscribers: string[];
    images: {
        avatar_image: {
            big: string,
            small: string,
        }
        profile_image: {
            big: string,
            small: string,
        }
    }
}

export default IUser;