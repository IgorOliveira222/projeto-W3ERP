import { CardTotal } from "./styles"


type Props = {
    nameDashboard?: string,
    quantTotal?: number,
    percentageTotal?: number,
}

export default function cardtotal ({nameDashboard, quantTotal, percentageTotal}:Props){
    return(
        <CardTotal>
            <div className="BoxGrafico">
                
            </div>
            <div className="BoxQuant">
                <p>
                    Total <b>{nameDashboard}</b> em Alta
                </p>
                <div className="Frame">
                    <p>{quantTotal}</p>
                    <div className="PercentageTotal">
                    <p>+{percentageTotal} %</p>
                    </div>
                </div>
            </div>
        </CardTotal>
    )
}
