import styled from "styled-components";

export const Card = styled.div `
    width: 280px;
    height: 220px;
    border-radius: 24px;
    background: #FFFFFF;
    margin: 12px;

    .HeaderCard{
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }

        .User{
            display: flex;
        }

            .backImg{
                width: 48px;
                height: 48px;
                background: #C5CFFF;
                border-radius: 100%;
                margin-right: 5px;
                align-items: center;
            }

                .ImgUser{
                    margin: 12px;
                }

        .Client{
            font-family: Poppins;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            color: #212121;
        }

        .Status{
            font-family: Poppins;
            font-size: 14px;
            font-weight: 400;
            color: #00C247;
        }

        .Button{
            border: none;
            background-color: #ffffff;
            cursor: pointer;
        }

    .CardTable{
        width: 240px;
        height: 130px;
        border-radius: 16px;
        opacity: 0.5px;
        background: #EEEEEE;
        margin: 0 20px;
    }

        .Table{
            width: 240px;
            height: 130px;
            font-family: Poppins;
            font-size: 14px;
            font-weight: 400;
            padding: 10px;
        }

            .Thead{
                color: #796CE0;
            }

                .th-primary{
                    text-align: left;
                }

                .td-Date{
                    text-align: center;
                }

            .Tbody{
                color: #424242;
            }

`