import React, {FC} from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";

interface PropsType {

}

const SearchResults: FC<PropsType> = () => {
    return (
        <>
            <PageDefaultLayout header={"Results"}>
                <div>Search Results</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    )
}

export default SearchResults;