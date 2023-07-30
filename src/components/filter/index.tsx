import { Filter } from "./styles"
import ImgSearch from "../image/search.png"

export default function cardtotal (){
    return(
        <Filter>
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
        </Filter>
    )
}

