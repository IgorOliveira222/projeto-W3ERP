import { Historic } from "./styles"
import ImgProduct from "../image/facial-cleanser.png"
import ImgWritwOff from "../image/WriteOff.png"

type Props = {
    ID?: number,
    NameProduct?: string,
    UltCompra?: string,
    ProxCompra?: string,
    Qtd?: string,
}

export default function ProductsSoldOff ({ID, NameProduct, UltCompra, ProxCompra, Qtd}:Props) {
    return(
        <Historic>
            <div className="Header">
                <div className="BackImage">
                    <img className="ImgHistoric" src={ImgProduct}/>
                </div>
                <b className="NameCard"> Produtos esgotado</b>
            </div>
            <table className="Table">
                    <thead className="Thead">
                            <th className="Id">ID</th>
                            <th>Produto</th>
                            <th>Última compra</th>
                            <th>Próx. compra</th>
                            <th>Qtd.</th>
                            <th className="Percentage">Dar baixa</th>
                    </thead>
                    <tr className="Tbody">
                            <td className="Center">{ID}</td>
                            <td>{NameProduct}</td>
                            <td className="Center">{UltCompra}</td>
                            <td className="Center">{ProxCompra}</td>
                            <td className="Center">{Qtd}</td>
                            <td className="Center"><button className="button"><img src={ImgWritwOff}/></button></td>
                    </tr>
            </table>
        </Historic>
    )
}
