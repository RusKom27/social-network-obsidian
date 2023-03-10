import React, {FC} from 'react';

import {dialogApi} from "../../../shared/api";
import {ComponentList} from "../../../shared/ui";
import {DialogCard} from "../../dialog-card";


interface PropsType {
    query?: string
}

const DialogCardList: FC<PropsType> = () => {
    const {data: dialogsList, isLoading} = dialogApi.useFetchDialogsQuery("");

    if (isLoading || !dialogsList) return <div>Loading</div>;

    return (
        <ComponentList>
            {dialogsList.map(dialog =>
                <DialogCard dialog={dialog} key={dialog._id}/>,
            )}
        </ComponentList>
    );
};

export default DialogCardList;

