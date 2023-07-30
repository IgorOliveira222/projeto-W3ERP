import Header from "../components/header/index";
import Menu from "../components/menu/index";
import {Page} from "../components/styles/stylesPredicoes"
import Filter from "../components/filter/index";
import CardClient from "../components/cardClientesPredicoes/index";



export default function Dashboard (){

    return(
        <Page>
            <Menu/>
            <div>
                <Header
                    NameUser = "Igor Ramos" 
                    EmailUser = "igor@gmail.com"
                />
                <h4 className="NamePage">Predições</h4>
                <Filter/> 
                <div className="CardUser">
                    <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />
                        <CardClient
                        NameClient="Hotel Ibis"
                        Status="Status vai aqui"
                        Produto1="Álcool em gel"
                        ProxCompra1={222}
                        Produto2="Água sanitaria"
                        ProxCompra2={522}
                        Produto3="Papel higiênico"
                        ProxCompra3={1022}
                        />

                </div>
            </div>
        </Page>
    )
}
