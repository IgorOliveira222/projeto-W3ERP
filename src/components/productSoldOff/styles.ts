import styled from "styled-components";

export const Historic = styled.div `
width: 550px;
max-height: 842px;
border-radius: 24px;
margin: 20px 10px;
padding: 20px 20px;
background: #FFFFFF;


    .Header{
        display:flex;
    }

        .BackImage{
            width: 50px;
            height: 50px;
            border-radius: 8px;
            background: #FFE1E1;
        }

            .ImgHistoric{
                margin: 13px;
            }

        .NameCard{
            font-family: Sora;
            font-size: 20px;
            padding: 12px;
            color: #FF3333;
        }

    .Table{
        width: 555px;
        margin: 15px 0;
        border-radius: 16px;
        border-collapse: collapse;
    }

        .Thead{
            width: 550px;
            height: 56px;
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

            .button{
                border: none;
                background: transparent;
                cursor: pointer;
            }

            .Center{
                text-align: center;
            }

`