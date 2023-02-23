import {FC, useEffect, useRef} from "react";

import {postApi} from "../../../shared/api";
import {Loader} from "../../../shared/ui";

interface PropsType {
    search_query: string
}

export const UsersSearchResult: FC<PropsType> = ({search_query}) => {
    // const {data: post} = postApi.useFetchPostQuery(post_id);

    const textRef = useRef<HTMLSpanElement>(null);
    //
    // useEffect(() => {
    //     if (textRef.current) {
    //         textRef.current.innerHTML = post ? post.text.replace(/\n\r?/g, '<br />') : "";
    //     }
    // }, [post, textRef]);
    //
    // if (!post) return <MessagePageLayout />;

    return (
        <span ref={textRef}></span>
    );
};