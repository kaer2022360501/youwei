import styled from 'styled-components';
import news from "./img/new2.png";
import sale from "./img/4sale2.png";
import man from "./img/1566296854iconmen90.gif";
import star from "./img/hot2.png";
import sort from "./img/newcategory2.png";


export const HomeNavWrapper = styled.div`
    .nav{
        display:flex;
        width:100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .nav li{
        width:100%;
        text-align:center;

    }
    .nav li div{
        width:.5rem;
        height:.5rem;
        margin-left:.12rem;
    }
    .nav li p{
        font-size:.12rem;
        text-align:center;
    }
    .nav li:nth-of-type(1) div{
        background:url(${news})  no-repeat;
        background-size:cover;
    }
    .nav li:nth-of-type(2) div{
        background:url(${sale})  no-repeat;
        background-size:cover;
    }
    .nav li:nth-of-type(3) div{
        background:url(${man})  no-repeat;
        background-size:cover;
    }
    .nav li:nth-of-type(4) div{
        background:url(${star})  no-repeat;
        background-size:cover;
    }
    .nav li:nth-of-type(5) div{
        background:url(${sort})  no-repeat;
        background-size:cover;
    }
`
