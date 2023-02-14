import {FC, ReactNode, useContext} from "react";

import { ModalWindowContext } from "../../../shared/lib/contexts";
import {Button} from "../../../shared/ui";


interface PropsType {
    children: ReactNode | ReactNode[] | string
    title: string
    name: string
}

export const OpenModalWindow: FC<PropsType> = ({children, title, name}) => {
    const {openModalWindow} = useContext(ModalWindowContext);

    const onClickHandler = () => {
        openModalWindow({
            title,
            children,
        });
    };

    return <Button onClick={onClickHandler}>{name}</Button>;
};