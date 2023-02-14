import {createContext, ReactNode} from "react";

export interface ModalWindowProps {
    title?: string,
    children?: ReactNode | ReactNode[] | string
}

export const ModalWindowContext = createContext({
    openModalWindow: (modalWindowProps: ModalWindowProps):void => {return;},
    closeModalWindow: () => {return;},
});