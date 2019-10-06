import styled from "styled-components";
import bg from "../../../static/img/bg.jpg";


export const Container=styled.div`
    .group-title{
        color: #000;
        font-size: 18px;
        line-height: 50px;
        font-weight: bold;
        padding-left: 12px;
        margin-top: 30px;
    }
    .container{
        margin:0 auto;
        padding-right:.14rem;
        display:flex;
        flex-wrap:wrap;
    } 
    .container .content{
        width:50%;
    }
    .content a{
        display:block;
       
        margin-top:.15rem;
        margin-left:.14rem;
    }
    .content a .product_img{
        background-image: url(${bg});
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 100px 100px;
        position: relative;
    }
    .content a .product_img img{
        width:100%;
    }
    .content a .product_txt{
        clear: both;
        height: .45rem;
        font-size: .12rem;
        color: #626161;
        position: relative;
        padding-top: .05rem;
    }
    .content a .product_txt .product_name{
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
    }
    .content a .product_txt .title{
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
    }
    .content a .product_price{
        height: .28rem;
        line-height: .16rem;
        font-size: .14rem;
        overflow: hidden;
    }
    .content a .product_price .final_price{
        color: #626161;
        font-weight: bold;
    }
    .content a .product_price .original_price{
        font-size: .1rem;
        color: #ccc;
        text-decoration: line-through;
        margin-left: .03rem;
    }
`