import styled from "styled-components";

export const Filter = styled.div`
width: 1250px;
height: 96px;
border-radius: 24px;
background-color: #ffffff ;
margin: 0 50px;

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
`
