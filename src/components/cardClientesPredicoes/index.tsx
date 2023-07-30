import { Card } from "./styles"
import User from "../image/UserCard.png"
import Rigth from "../image/right.png"

type Props = {
    NameClient?: string,
    Status?: string,
    Produto1?: string,
    ProxCompra1?: number,
    Produto2?: string,
    ProxCompra2?: number,
    Produto3?: string,
    ProxCompra3?: number,
}

export default function CardClient ({NameClient, Status, Produto1, ProxCompra1, 
    Produto2, ProxCompra2, Produto3, ProxCompra3,}:Props){
    return(
        <Card>
            <div className="HeaderCard">
                <div className="User">
                    <div className="backImg">
                    <img className="ImgUser" src={User}/>
                    </div>
                    <div >
                        <p className="Client">{NameClient}</p>
                        <p className="Status"><b>. </b>{Status}</p>
                    </div>
                </div>
                <button className="Button"><img src={Rigth}/></button>
            </div>
            <div className="CardTable">
            <table className="Table">
                    <thead className="Thead">
                        <th className="th-primary">Produto</th>
                        <th>Próx. compra</th>
                    </thead>
                    <tbody className="Tbody">
                        <tr>
                            <td>{Produto1}</td>
                            <td className="td-Date"><b>{ProxCompra1}</b></td>
                        </tr>
                    </tbody>
                    <tbody className="Tbody">
                        <tr>
                            <td>{Produto2}</td>
                            <td className="td-Date"><b>{ProxCompra2}</b></td>
                        </tr>
                    </tbody>
                    <tbody className="Tbody">
                        <tr>
                            <td>{Produto3}</td>
                            <td className="td-Date"><b>{ProxCompra3}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Card>
    )
}