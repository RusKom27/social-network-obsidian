
import { useNavigate } from "react-router-dom";
import React, {FC, ReactNode} from 'react';

import styles from "./PageHeader.module.scss";
import {Button} from "../../button";
import {Icon} from "../../icon";

interface PropsType {
    children?: ReactNode | ReactNode[],
    withBackButton?: boolean
}

const PageHeader: FC<PropsType> = ({children, withBackButton=true}) => {
    const navigate = useNavigate();

    return (
        <header className={styles.container}>
            { withBackButton &&
                <Button onClick={ () => navigate(-1) } size={ 2 }>
                    <Icon type={ "BackArrow" } size={ 1 }/>
                </Button>
            }
            <div>
                {children}
            </div>
        </header>
    );
};

export default PageHeader;