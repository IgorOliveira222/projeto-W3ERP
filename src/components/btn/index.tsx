import { MouseEventHandler } from "react"
import { Button } from "./styles"


type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    textBtn: string ,
}

export default function Btn ({onClick, textBtn}:Props){
    return(
        <>
            <Button onClick={onClick}>
                {textBtn}
            </Button>
        </>
    )
}