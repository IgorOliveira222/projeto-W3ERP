import styled from "styled-components";

export const Menu = styled.div `
width: 274px;
height: 850px;
background-color: #001C98;

    .CardChat{
        width: 223px;
        height: 201px;
        margin: 200px 25px 25px 25px ;
        background: #796CE0;
        border-radius: 25px ;
        color: #ffffff;
        position: relative;
    }

        .Chat{
            padding: 90px 10px 10px 10px;
        }

            .PhraseCHat{
                font-family: Poppins;
                font-size: 17px;
                text-align: center;
                margin: -10px 0px 10px 0px;
            }

        .BntSAC{
            width: 191px;
            height: 48px;
            border-radius: 100px;
            margin: 0 5px;
            border: none;
            background: #001C98;
            color: #ffffff;
            cursor: pointer;
        }


`

export const Button = styled.button`
    width: 255px;
    height: 56px;
    border: none;
    font-size: 16px;
    border-radius: 8px;
    margin: 7px ;
    padding:0 15px;
    text-align: left;
    cursor: pointer;
    background-color: #001C98;
    color: #ffffff;
    transition: all .5s ease;

    :hover{
        background: #7682C1;
    }

`

export const ImagemLogo = styled.img `
    width: 100%;
    max-width:172.8px;
    height: auto;
    margin: 45px ;

`

export const ImagemSAC = styled.img `
    position:absolute;
    top: -50%;
    left: 15px;

`

export const ImgButton = styled.img `
margin: 5px 20px 0px 0px;

`