import { MouseEventHandler } from "react"
import { Button } from "./styles"
import {Link} from "react-router-dom"


type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>,

}

export default function Btn ({onClick,}:Props){
    return(
        <>
            <Link to="../../pages/Dashboard"><Button onClick={onClick}>Entrar</Button></Link>
        </>
    )
}