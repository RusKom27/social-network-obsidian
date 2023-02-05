import {imageApi, userApi} from "../../../shared/api";
import {useAppSelector} from "../../../shared/hooks";
import {Image} from "../../../shared/ui";
import {FetchImage} from "../../image";

export const UserAvatar = () => {
    const user_id = useAppSelector(state => state.auth.user_id)
    const {data: user} = userApi.useFetchUserByIdQuery(user_id)

    if (!user) return <div>Loading</div>
    return (
        <Image type={"avatar"}>
            <FetchImage src={user.images.avatar_image.small}/>
        </Image>
    )
}