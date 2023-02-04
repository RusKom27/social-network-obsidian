import {FC, ReactNode, useState} from "react";
import {ModalWindowContext, ModalWindowProps} from "./ModalWindowContext";
import {ModalWindow} from "../../../ui";


interface PropsType {
    children: ReactNode | ReactNode[]
}

export const ModalWindowProvider: FC<PropsType> = ({children}) => {
    const [isModalWindowOpened, setModalWindowOpened] = useState(false)
    const [modalWindowContent, setModalWindowContent] = useState<ModalWindowProps | null>(null)

    const openModalWindow = (modalWindowProps: ModalWindowProps) => {
        setModalWindowContent(modalWindowProps)
        setModalWindowOpened(!isModalWindowOpened)
    }

    const closeModalWindow = () => {
        setModalWindowOpened(false)
    }

    return (
        <ModalWindowContext.Provider value={{openModalWindow, closeModalWindow}}>
            {children}
            {isModalWindowOpened &&
                <ModalWindow title={modalWindowContent?.title}>
                    {modalWindowContent?.children}
                </ModalWindow>
            }
        </ModalWindowContext.Provider>
    )
}