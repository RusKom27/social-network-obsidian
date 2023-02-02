import React, {FC} from "react";

import {PostCardList, Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";

interface PropsType {

}

const Feed: FC<PropsType> = () => {
    return (
        <>
            <PageDefaultLayout header={"Home"}>
                <PostCardList/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    )
}

export default Feed;