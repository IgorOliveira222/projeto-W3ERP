import styled from "styled-components";

export const Card = styled.header `

width: 1250px;
height: 800px;
border-color:black;
border-radius:16px;
background-color: #ffffff ;
margin: 20px 45px;

    .Search{
            width: 400px;
            height: 56px;
            display: flex;
            padding: 20px 30px;
        }

            .Input{
                width: 350px;
                height: 51px;
                padding: 0 15px;
                border-right: none;
                background:#FFFFFF;
                border-radius: 8px 0 0 8px ;
                border-color:#E0E0E0;
                font-family: Poppins;
                font-size: 20px;
                font-weight: 400;
                color: #757575;
            }

            .Button{
                width: 50px;
                height: 55px;
                border-left: none;
                border-radius: 0 8px 8px 0 ;
                border-color:#E0E0E0;
                background:#FFFFFF;
                cursor: pointer;
            }

    .Filter{
        display: flex;
    }

        .FrameFilter{
            border: none;
            background: transparent;
            cursor: pointer;
        }


    .Table{
        width: 1200px;
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
            text-align: center;
            width: 550px;
            height: 56px;
            font-family: Poppins;
            font-size: 16px;
            background-color:#F5F5F5
        }


                .BackStatus{
                    height:40px;
                    border-radius: 8px;
                    padding: 0px 10px;
                    background: #D9FEE6;
                    color: #00C247;
                    display: table-cell;
                    vertical-align: middle;
                }

`

