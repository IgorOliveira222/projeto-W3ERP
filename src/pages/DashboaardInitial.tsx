import Header from "../components/header/index";
import Menu from "../components/menu/index";
import {Page} from "../components/styles/stylesDashboard"


export default function Dashboard (){

    return(
        <Page>
            <Menu/>
                <Header
                    NameUser = "Igor Ramos" 
                    EmailUser = "igor@gmail.com"
                />
        </Page>
    )
}

