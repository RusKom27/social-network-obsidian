import {userApi} from "../../../shared/api";
import {Image, Loader} from "../../../shared/ui";
import {FetchImage} from "../../image";
import {FC, memo} from "react";
import {Size} from "../../../shared/lib/types";


interface PropsType {
    size?: Size
    user_id: string | undefined
}

export const UserAvatar = memo<PropsType>(({size, user_id}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id || "")

    if (!user) return <Loader />

    return (
        <Image size={size} type={"avatar"}>
            <FetchImage src={user.images.avatar_image.small} type={"avatar"}/>
        </Image>
    )
})