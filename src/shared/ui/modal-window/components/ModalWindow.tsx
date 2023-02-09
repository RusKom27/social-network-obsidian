import React, {FC, ReactEventHandler, ReactNode, useContext, useEffect} from 'react';

import styles from "./ModalWindow.module.scss"
import {ModalWindowContext} from "../../../lib/contexts";

interface PropsType {
    title?: string,
    children: ReactNode | ReactNode[] | string
}

const ModalWindow: FC<PropsType> = ({title, children}) => {
    const {closeModalWindow} = useContext(ModalWindowContext);

    const preventScroll = (prevent: boolean) => {
        document.documentElement.style.overflow = prevent ? 'clip' : 'visible'
    }

    useEffect(() => {
        preventScroll(true)
    })

    return (
        <div className={styles.background} onClick={() => {
            preventScroll(false)
            closeModalWindow()
        }}>
            <div className={styles.container} onClick={(event) => event.stopPropagation()}>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;