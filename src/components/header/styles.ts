import styled from "styled-components";

export const Header = styled.header `
    width: 1300px;
    height: 50px;
    padding: 30px;
    display:flex ;
    justify-content:space-between ;
    background-color: #ffffff ;

    .ImgUser{
        width: 56px;
        height: 56px;
    }

    .Img3Traits{
        padding: 15px;
    }

    .User{
        display: flex ;
    }

        .ButtonTraits{
            border: none;
            background:transparent;
            cursor: pointer;
        }

        .NameUser{
            font-family: Sora;
            font-size: 20px;
            font-weight: 600;
            line-height: 28px;
            text-align: left;
            color: #212121;
            margin: 0px 15px;
        }

        .EmailUser{
            font-family: Poppins;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            color: #757575;
            margin: -2px 0px 0 15px;

        }

`