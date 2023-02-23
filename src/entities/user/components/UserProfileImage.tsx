import {FC} from "react";

import {userApi} from "../../../shared/api";
import {Image, Loader} from "../../../shared/ui";
import {FetchImage} from "../../image";
import {Size} from "../../../shared/lib/types";


interface PropsType {
    size?: Size
    user_id: string
}

export const UserProfileImage: FC<PropsType> = ({size, user_id}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id);

    if (!user) return <Loader />;

    return (
        <Image size={size} type={"default"}>
            <FetchImage src={user.images.profile_image.small}/>
        </Image>
    );
};