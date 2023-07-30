import Btn from "../components/btn";
import { CardLogin } from "../components/styles/stylesLogin";
import ImgLogin from "../components/image/imgLogin.jpeg";
import Input from "../components/input";
import {ImagemLogin} from "../components/styles/stylesLogin"
import {FormularioLogin} from "../components/styles/stylesLogin"
import {CheckboxLogin} from "../components/styles/stylesLogin"


export default function Login (){
    function cliquei() {
        console.log ("Chamei a Função")
    }

    return (
        <CardLogin>
            <FormularioLogin>
                <h5>Seja bem vindo!</h5>
                <h3>Realize seu Login</h3>

                <Input
                idInput="Email"
                nameInput="Digite seu E-mail"
                nameLabel="E-mail"
                />
                <Input
                idInput="Senha"
                nameInput="Digite sua senha"
                nameLabel="Senha"
                />

                <Input
                typeInput="checkbox"
                />

                <CheckboxLogin>
                    <p>Lembrar-me</p>
                    <p>Esqueci minha senha</p>
                </CheckboxLogin>
                <Btn
                textBtn="Entrar"
                onClick={cliquei}
                />
            </FormularioLogin>
            <ImagemLogin src={ImgLogin}/>
        </CardLogin>
    )
}