import React, {FC, useContext, useRef} from 'react';

import {Button, Icon, Loader} from "../../../shared/ui";
import {HoverCardContext} from "../../../shared/lib/contexts";
import {DeleteMessageButton} from "../../delete-message-button";
import {DeletePostButton} from "../../delete-post-button";
import {postApi} from "../../../shared/api";
import {useAppSelector} from "../../../shared/hooks";
import {FollowUserButton} from "../../follow-user-button";
import {UserLogin} from "../../../entities/user";
import {EditPostButton} from "../../edit-post-button";


interface PropsType {
    post_id: string
}

export const OpenPostOptionsButton: FC<PropsType> = ({post_id}) => {
    const {data: post} = postApi.useFetchPostQuery(post_id);
    const user_id = useAppSelector(state => state.auth.user_id);
    const {openHoverCard, closeHoverCard} = useContext(HoverCardContext);
    const optionRef = useRef<HTMLDivElement>(null);

    if (!post) return <Loader/>;

    const onClickHandler = () => {
        openHoverCard({
            children: <>
                {post.author_id === user_id && <>
                    <DeletePostButton size={1} border={false} onSubmit={() => closeHoverCard()} post_id={post_id}/>
                    <EditPostButton size={1} post_id={post_id}/>
                </>}
                {post.author_id !== user_id && <>
                    <FollowUserButton size={1} user_id={post.author_id}>
                        <UserLogin size={1} user_id={post.author_id}/>
                    </FollowUserButton>
                </>}
            </>,
            targetElement: optionRef.current,
            position: "absolute",
            vertical_align: "same",
            horizontal_align: "left",
        });
    };

    return (
        <div ref={optionRef}>
            <Button onClick={onClickHandler} size={0}>
                <Icon type={"ThreeDots"} size={0}/>
            </Button>
        </div>

    );
};