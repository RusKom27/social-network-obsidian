import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {Button, Icon, Loader} from "../../../shared/ui";
import styles from "./ActualTopicCard.module.scss";
import {ITopic} from "../../../shared/api/models";
import {topicApi} from "../../../shared/api";


interface PropsType {
    topic_id: string
}

const ActualTopicCard: FC<PropsType> = ({topic_id}) => {
    const {data: topic} = topicApi.useGetTopicQuery(topic_id);

    if (!topic) return <Loader/>;

    return (
        <Link className={styles.container} to={`/?text=${topic.name}`}>
            <div className={styles.main}>
                <div>{topic.name}</div>
                <div>Posts: {topic.count}</div>
            </div>
            <div className={styles.side}>
                <Button size={0}><Icon type={"ThreeDots"} size={0}/></Button>
            </div>
        </Link>
    );
};

export default ActualTopicCard;

