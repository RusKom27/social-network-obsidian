import {useContext} from "react";
import { ModalWindowContext } from "../../../shared/lib/contexts";
import {Button} from "../../../shared/ui";


export const OpenRegistrationModalWindow = () => {
    const {openModalWindow} = useContext(ModalWindowContext)

    const onClickHandler = () => {
        openModalWindow({
            title: "Registration",
            children: <div>Registration</div>
        })
    }

    return <Button onClick={onClickHandler}>Registration</Button>
}