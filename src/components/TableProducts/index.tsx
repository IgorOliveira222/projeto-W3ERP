import ImgProduto from "../image/ProductsBlue.png"
// import ImgClient from "../image/Client.png"
import {Card} from "./styles"
import ImgRigth from "../image/right.png"


type Props = {
    ImgPC?: string,
    NameCard?:string,
    ID?: string,
    NamePC?:string,
    Percentage?: string,
}

export default function card ({ NameCard, ID, NamePC, Percentage}:Props){
    return(
        <Card>
            <div className="HeaderCard">
                <div className="NameCard" >
                    <div className="backgroundImage"><img src={ImgProduto}/></div>
                    <div>Product</div>
                </div>
                <div className="BarButton">
                    <button className="ButtonAlta">Em alta</button>
                    <button className="ButtonBaixa">Em baixa</button>
                </div>
            </div>
            <div>
                <table className="Table">
                    <thead className="Thead">
                        <th className="Id">ID</th>
                        <th>{NameCard}</th>
                        <th className="Percentage">Percentual</th>
                        <th></th>
                    </thead>
                    <tr className="Tbody">
                        <td>{ID}</td>
                        <td>{NamePC}</td>
                        <td>{Percentage}</td>
                        <td><button className="Button"><img src={ImgRigth}/></button></td>
                    </tr>
                    <tr className="Tbody">
                        <td>{ID}</td>
                        <td>{NamePC}</td>
                        <td>{Percentage}</td>
                        <td><button className="Button"><img src={ImgRigth}/></button></td>
                    </tr>
                    <tr className="Tbody">
                        <td>{ID}</td>
                        <td>{NamePC}</td>
                        <td>{Percentage}</td>
                        <td><button className="Button"><img src={ImgRigth}/></button></td>
                    </tr>
                </table>
            </div>
        </Card>
    )
}
