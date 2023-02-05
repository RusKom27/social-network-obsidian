import React, {FC, ReactNode, useState} from 'react';

import styles from "./ComponentList.module.scss"

interface PropsType {
    children: any[]
    Component: any
}

const ComponentList: FC<PropsType> = ({children, Component}) => {
    return (
        <>
            {children.map((item, i) =>
                <Component key={i} { ...item }/>
            )}
        </>
    )
}

export default ComponentList;