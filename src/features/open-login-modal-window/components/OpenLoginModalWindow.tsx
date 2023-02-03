import {useContext} from "react";
import { ModalWindowContext } from "../../../shared/lib/contexts";
import {Button} from "../../../shared/ui";


export const OpenLoginModalWindow = () => {
    const {openModalWindow} = useContext(ModalWindowContext)

    const onClickHandler = () => {
        openModalWindow({
            title: "Login",
            children: <div>Login</div>
        })
    }

    return <Button onClick={onClickHandler}>Login</Button>
}