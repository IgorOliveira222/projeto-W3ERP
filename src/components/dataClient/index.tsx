import { DataClient } from "./styles"
import Telephone from "../image/telephone.png"
import Email from "../image/mail.png"
import Fundo from "../image/fundo W3-01 1.png"

type Props = {
    emailClient?: string,
    telClient?: number,
    NameClient?: string
}

export default function dataClient ({telClient, emailClient, NameClient}:Props){
    return(
        <DataClient>
        <img className="ImgFundo" src={Fundo}/>
        <div className="Data">
            <h1 className="NameCliente">{NameClient}</h1>
            <div className="DataContact">
                <p className="Telephone" ><img className="ImgContact1" src={Telephone}/> {telClient}</p>
                <p><img className="ImgContact2" src={Email}/> {emailClient}</p>
            </div>
        </div>
        </DataClient>
    )
}
