import ImgUser from "../image/user.png"
import Img3Traits from "../image/3Traits.png"
import { Header } from "./styles"


type Props = {
    NameUser: string,
    EmailUser:string,
}

export default function header ({NameUser, EmailUser}:Props){
    return(
        <Header>
            <div className="Img3Traits">
                <button className="ButtonTraits"><img src={Img3Traits}/></button>
            </div>
            <div className="User">
                <img className="ImgUser" src={ImgUser}/>
                <div>
                    <p className="NameUser">{NameUser}</p>
                    <p className="EmailUser">{EmailUser}</p>
                </div>
            </div>
        </Header>
    )
}