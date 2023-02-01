import React, {FC} from "react";

import Layout from "./Layout";
import {PostCardList} from "../../../widgets";

interface PropsType {

}

const Feed: FC<PropsType> = () => {
    return (
        <Layout>
            <PostCardList/>
        </Layout>
    )
}

export default Feed;