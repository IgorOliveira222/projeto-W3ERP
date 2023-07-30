import ImgFrameFilter from "../image/FrameFilter.png"
// import ImgClient from "../image/Client.png"
import {Card} from "./styles"
import ImgSearch from "../image/search.png"


type Props = {
    ID?: string,
    NameProduct?:string,
    Status?:string,
    Percentage?: string,
}

export default function card ({ NameProduct, ID, Status, Percentage}:Props){
    return(
        <Card>
            <div className="Filter">
                <div className="Search">
                    <input
                    type="text"
                    className="Input"
                    placeholder="Pesquise uma palavra-chave"
                    />
                    <button className="Button" type="submit">
                    <img src={ImgSearch}/>
                    </button>
                </div>
                <button className="FrameFilter"><img src={ImgFrameFilter}/></button>
            </div>
            <div>
                <table className="Table">
                    <thead className="Thead">
                        <th className="Id">ID</th>
                        <th>Produto</th>
                        <th>Status</th>
                        <th className="Percentage">Percentual</th>
                    </thead>
                    <tr className="Tbody">
                        <td>{ID}</td>
                        <td>{NameProduct}</td>
                        <td><div className="BackStatus">{Status}</div></td>
                        <td>{Percentage}</td>
                    </tr>
                </table>
            </div>
        </Card>
    )
}
