import {imageApi, userApi} from "../../../shared/api";
import {useAppSelector} from "../../../shared/hooks";
import {Image} from "../../../shared/ui";
import {FetchImage} from "../../image";
import {FC} from "react";


interface PropsType {
    size?: 0 | 1 | 2 | 3 | 4 | 5
}

export const UserAvatar: FC<PropsType> = ({size}) => {
    const user_id = useAppSelector(state => state.auth.user_id)
    const {data: user} = userApi.useFetchUserByIdQuery(user_id)

    if (!user) return <div>Loading</div>

    return (
        <Image size={size} type={"avatar"}>
            <FetchImage src={user.images.avatar_image.small}/>
        </Image>
    )
}