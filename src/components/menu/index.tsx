import ImgLogo from "../image/logo.jpeg"
import { Menu } from "./styles"
import {ImagemLogo} from "../menu/styles"
import { MouseEventHandler } from "react"
import { Button } from "./styles"
import ImgSAC from "../image/imgChat.png"
import {ImagemSAC} from "../menu/styles"
import ImgChartLine from "../image/chart-line.png"
import ImgChart from "../image/Chart.png"
import ImgProducts from "../image/Products.png"
import {ImgButton} from "../menu/styles"


type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>,
}

export default function menu ({onClick, }:Props){
    return(
        <Menu>
            <ImagemLogo src= {ImgLogo} />
            <Button onClick={onClick}><ImgButton src={ImgChart}/> Dashboard </Button>
            <Button onClick={onClick}><ImgButton src={ImgChartLine}/> Predições</Button>
            <Button onClick={onClick}><ImgButton src={ImgProducts}/> Produtos</Button>
            <div className="CardChat" >
                <div className="Chat">
                    <div className="PhraseCHat">
                    <p>Precisando de <b>ajuda</b></p>
                    <p><b>ou suporte</b> em algo?</p>
                    </div>
                <button onClick={onClick} className="BntSAC">Fale conosco</button>
                </div>
                <ImagemSAC src={ImgSAC}/>
            </div>
        </Menu>
    )
}
