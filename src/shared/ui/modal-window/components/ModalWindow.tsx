import React, {FC, useContext, useEffect} from 'react';

import styles from "./ModalWindow.module.scss"
import {ModalWindowContext} from "../../../lib/contexts";
import {ModalWindowProps} from "../../../lib/contexts/modal-window/ModalWindowContext";

const ModalWindow: FC<ModalWindowProps> = ({title= "", children}) => {
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
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;