import React, {FC} from 'react';

import {Button, Icon} from "../../../shared/ui";
import {Topic} from "../../../shared/api/types";
import styles from "./ActualTopicCard.module.scss";


interface PropsType {
    actualTopic: Topic
}

const ActualTopicCard: FC<PropsType> = ({actualTopic}) => {

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div>{actualTopic.value}</div>
                <div>Posts: {actualTopic.count}</div>
            </div>
            <div className={styles.side}>
                <Button size={0}><Icon type={"ThreeDots"} size={0}/></Button>
            </div>
        </div>
    );
};

export default ActualTopicCard;

