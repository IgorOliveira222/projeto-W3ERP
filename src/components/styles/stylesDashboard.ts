import styled from "styled-components";

export const Page = styled.div `

display: flex;
background: #F5F5F5;
max-width: 1300px;

    .CardGraphics{
        margin: 25px 25px;
        padding: 20px;
        width: 1300px;
        height: 292px;
        border-radius: 24px;
        background: #001C98;
    }

        .HeaderGraphics{
            display: flex;
            justify-content: space-between;
            margin: 25px 15px;
        }

            .h1{
                font-family: Sora;
                font-size: 32px;
                font-weight: 600;
                line-height: 48px;
                color: #FFFFFF;
            }
            
            .filter{
                display: flex;
                width: 224px;
                height: 40px;
                padding: 0 5px;
                border-radius: 8px;
                background: #FFFFFF;
                align-items: center;
                font-family: Poppins;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                color:#424242;
            }

            .p{
                margin: 0 10px;
            }

            .inputFilter{
                width: 85px;
                height: 24px;
                font-family: Poppins;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
                border: none;
                color: #001C98;

            }

        .Graphics{
            display: flex;
            justify-content: space-around;
            margin: 55px 0;
        }

    .TablePage{
        display: flex;
        justify-content: space-around;
    }





`