
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";


const SearchResults = () => {
    return (
        <>
            <PageDefaultLayout header={"Results"}>
                <div>Search Results</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default SearchResults;