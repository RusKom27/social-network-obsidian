import {FC, useEffect, useRef} from "react";

import {postApi} from "../../../shared/api";
import {DateText, Loader} from "../../../shared/ui";
import styles from "./Post.module.scss";

interface PropsType {
    post_id: string
}

export const PostCreationDate: FC<PropsType> = ({post_id}) => {
    const {data: post} = postApi.useFetchPostQuery(post_id);

    if (!post) return <Loader />;

    return (
        <DateText styles={styles.post_creation_date} date={post.createdAt}/>
    );
};