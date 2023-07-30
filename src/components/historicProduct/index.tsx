import { Historic } from "./styles"
import ImgHistoric from "../image/history.png"
import ImgWritwOff from "../image/WriteOff.png"

type Props = {
    ID?: number,
    NameProduct?: string,
    UltCompra?: string,
    Qtd?: string,
}

export default function historicProducts ({ID, NameProduct, UltCompra, Qtd}:Props) {
    return(
        <Historic>
            <div className="Header">
                <div className="BackImage">
                    <img className="ImgHistoric" src={ImgHistoric}/>
                </div>
                <b className="NameCard"> Histórico</b>
            </div>
            <table className="Table">
                    <thead className="Thead">
                        <th className="Id">ID</th>
                        <th>Produto</th>
                        <th>Última compra</th>
                        <th>Qtd.</th>
                        <th className="Percentage">Dar baixa</th>
                    </thead>
                    <tr className="Tbody">
                        <td className="Center">{ID}</td>
                        <td>{NameProduct}</td>
                        <td className="Center">{UltCompra}</td>
                        <td className="Center">{Qtd}</td>
                        <td className="Center"><button className="button"><img src={ImgWritwOff}/></button></td>
                    </tr>
            </table>
        </Historic>
    )
}
