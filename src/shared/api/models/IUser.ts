export default interface IUser {
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

// {
//     "_id": {
//         "$oid": "638cb3e62fcb67b4aa2bfdd0"
//     },
//     "name": "User4",
//     "login": "user4",
//     "email": "user4@gmail.com",
//     "password": "password4",
//     "creation_date": {
//         "$date": {
//             "$numberLong": "1670165478999"
//         }
//     },
//     "__v": 40,
//     "subscribers": [
//         {
//             "$oid": "638ce86ef46583e86646b3d4"
//         },
//         {
//             "$oid": "639ec7225edf70d6e3d1057b"
//         }
//     ],
//     "images": {
//         "avatar_image": {
//             "big": "user4_avatar.png",
//             "small": "user4_avatar.png"
//         },
//         "profile_image": {
//             "big": "user4_profile.png",
//             "small": "user4_profile.png"
//         }
//     },
//     "description": ""
// }