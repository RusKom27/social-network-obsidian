import React, {FC} from 'react';

import styles from "./LikePostButton.module.scss"
import {Button, Icon} from "../../../shared/ui";
import {postApi} from "../../../shared/api";

interface PropsType {
    post_id: string
}

export const LikePostButton: FC<PropsType> = ({post_id}) => {
    const [likePost] = postApi.useLikePostMutation()

    const clickEventHandler = () => {
        likePost(post_id)
    }

    return (
        <Button onClick={clickEventHandler} hover_highlight={"icon"}>
            <Icon type={"More"} size={2}/>Like
        </Button>
    )
}