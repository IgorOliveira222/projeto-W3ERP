import {Page} from "../components/styles/stylesPredicoesClient"
import Header from "../components/header/index"
import Menu from "../components/menu/index"
import DataClient from "../components/dataClient/index"
import Historic from "../components/historicProduct/index"
import ProductsSoldOff from "../components/productSoldOff/index"
import ImgFrame from "../components/image/Frame.png";

export default function Client (){
    return (
    <Page>
        <Menu/>
        <div>
            <Header
                NameUser = "Igor Ramos" 
                EmailUser = "igor@gmail.com"
            />
            <div className="Title">
                <button className="ButtonTitle"><img src={ImgFrame}/></button>
                <b className="NameTitle">Predição</b>
            </div>
            <DataClient
                emailClient= "hotelibis@gmail.com"
                telClient= {994689894}
                NameClient= "Hotel Ibis"
            />
            <div className="table">
                <Historic
                    ID={1}
                    NameProduct="Papel Higienico"
                    UltCompra="23/08"
                    Qtd="03"
                    />

                <ProductsSoldOff
                    ID={1}
                    NameProduct="Papel Higienico"
                    UltCompra="23/08"
                    ProxCompra="23/09"
                    Qtd="03"
                />
            </div>
        </div>
    </Page>
    )
}