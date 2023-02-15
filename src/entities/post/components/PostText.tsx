import {FC, useEffect, useRef} from "react";

import {postApi} from "../../../shared/api";
import {Loader} from "../../../shared/ui";

interface PropsType {
    post_id: string
}

export const PostText: FC<PropsType> = ({post_id}) => {
    const {data: post} = postApi.useFetchPostQuery(post_id);

    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (textRef.current) {
            textRef.current.innerHTML = post ? post.text.replace(/\n\r?/g, '<br />') : "";
        }
    }, [post, textRef]);

    if (!post) return <Loader />;

    return (
        <span ref={textRef}></span>
    );
};