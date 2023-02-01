import React, {FC} from 'react';

import styles from "./PostCard.module.scss"


interface PropsType {

}

const PostCard: FC<PropsType> = () => {
    return (
        <div className={styles.container}>
            Card
        </div>
    );
}

export default PostCard;

