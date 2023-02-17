
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout, PageHeader} from "../../../shared/ui";


const SearchResults = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>Search results</PageHeader>
                <div>Search Results</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default SearchResults;