import CardtotalAlta from "../components/cardTotalHigh";
import CardtotalBaixa from "../components/cardTotalLow";
import Header from "../components/header/index";
import Menu from "../components/menu/index";
import {Page} from "../components/styles/stylesDashboard"
import ImgFilter from "../components/image/calendar.png";
import TableProductClient from "../components/TableProducts/index"


export default function Dashboard (){

    return(
        <Page>
            <Menu/>
            <div>
                <Header
                    NameUser = "Igor Ramos" 
                    EmailUser = "igor@gmail.com"
                />
                <div>
                    <div className="CardGraphics">
                        <div className="HeaderGraphics">
                            <h1 className="h1">Dashboard</h1>
                            <div className="filter">
                                <img src={ImgFilter}/>
                                <p className="p"> Mostrar:</p>
                                <input list="filter" className="inputFilter"/>
                                <datalist id="filter">
                                <option><b>Esse mês</b></option>
                                <option><b>Esse ano</b></option>
                                </datalist>
                            </div>
                        </div>
                        <div className="Graphics">
                            <CardtotalAlta
                            nameDashboard="Produto"
                            quantTotal={120}
                            percentageTotal={13}
                            /> 
                            <CardtotalBaixa
                            nameDashboard="Produto"
                            quantTotal={56}
                            percentageTotal={29}
                            /> 
                            <CardtotalAlta
                            nameDashboard="Produto"
                            quantTotal={501}
                            percentageTotal={25}
                            /> 
                            <CardtotalBaixa
                            nameDashboard="Produto"
                            quantTotal={103}
                            percentageTotal={15}
                            />
                        </div>
                    </div> 
                </div>
                <div className="TablePage">
                    <TableProductClient
                    ImgPC= "ImgProduto"
                    NameCard= "Produtos"
                    ID= "001"
                    NamePC= "Papel Higiênico"
                    Percentage= "-72%"
                    />
                    <TableProductClient
                    ImgPC= "ImgClient"
                    NameCard= "Clientes"
                    ID= "001"
                    NamePC= "Hotel Ibis"
                    Percentage= "-72%"
                    />
                </div>
            </div>
        </Page>
    )
}

