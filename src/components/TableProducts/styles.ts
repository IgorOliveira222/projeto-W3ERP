import styled from "styled-components";

export const Card = styled.header `

width: 600px;
height: 650px;
border-color:black;
border-radius:16px;
background-color: #ffffff ;
margin: 20px 0;

    .HeaderCard{
        display: flex;
        justify-content: space-between;
        padding: 25px 20px;
    }

        .NameCard{
            display: flex;
            align-items: center;
            font-family: Sora;
            font-size: 20px;
            color: #212121;
        }

            .backgroundImage{
                margin: 0 10px 0 0;
                width: 50px;
                height: 50px;
                border-radius: 8px;
                align-items: center;
                background: #C5CFFF;
            }

        .BarButton{
            width: 251px;
            height: 40px;
            display: flex;
            align-items: center;
            background: #F5F5F5;
            padding: 5px;
            border-radius: 8px;
        }

            .ButtonAlta{
                width: 119px;
                height: 32px;
                border-radius: 8px;
                background: #00C247;
                border: none;
                margin: 0 5px 0 0;
                font-family: Poppins;
                font-size: 14px;
            }

            .ButtonBaixa{
                width: 119px;
                height: 32px;
                border-radius: 8px;
                background: #FF3333;
                border: none;
                font-family: Poppins;
                font-size: 14px;
            }

    .Table{
        width: 555px;
        margin: 0 20px;
        border-radius: 16px;
        border-collapse: collapse;
    }

        .Thead{
            width: 550px;
            height: 56px;
            border-radius: 16px ;
            background: #001C98;
            margin: 15px;

        }

        .Id{
            border-radius: 16px 0 0 0 ;
        }

        .Percentage{
            border-radius: 0 16px 0 0 ;
        }

        .Tbody{
            width: 550px;
            height: 56px;
            font-family: Poppins;
            font-size: 16px;
            background-color:#F5F5F5;
        }

            .Button{
                border: none;
                cursor: pointer;
                background: transparent;
            }

`

