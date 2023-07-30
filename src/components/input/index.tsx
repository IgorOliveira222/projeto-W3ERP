import { Input } from "./styles"
import {Label} from "./styles"

type Props = {
    nameInput?: string,
    nameLabel?: string ,
    idInput?: string,
    typeInput?: string,
}

export default function input ({nameLabel, nameInput, idInput, typeInput}:Props){
    return(
        <>
            <Label htmlFor= {idInput} >{nameLabel}</Label>
            <Input placeholder= {nameInput} id= {idInput} type={typeInput}/>
        </>
    )
}
