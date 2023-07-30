import Header from "../components/header/index"
import Menu from "../components/menu/index"
import {Page} from "../components/styles/stylesProducts"
import Products from "../components/products/index"


export default function Dashboard (){

    return(
        <Page>
            <Menu/>
            <div>
                <Header
                    NameUser = "Igor Ramos" 
                    EmailUser = "igor@gmail.com"
                />
                <h4 className="NamePage">Produtos</h4>
                <div className="CardProducts">
                    <Products
                        ID="001"
                        NameProduct="Papel Higienico"
                        Status="Em alta"
                        Percentage="+42%"
                    />
                </div>
            </div>
        </Page>
    )
}
