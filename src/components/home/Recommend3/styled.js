import styled from "styled-components";
import bg from "../../../static/img/bg.jpg";


export const Container=styled.div`
    .recom_title{
        color: #000;
        font-size: .18rem;
        line-height: .5rem;
        font-weight: bold;
        padding-left: .12rem;
        margin-top: .3rem;
    }
    .w100{
        width: 100%;
        display: block;
        color: #9e9e9e;
        background-color: #fff;
    }
    .w100 img{
        width:100%;
        height:auto;
    }
    .w100 div{
        font-size: 14px;
        color: #7a7a7a;
        margin: .2rem 0;
        padding: 0 .12rem;
        width: 100%;
        line-height: .18rem;
        max-height: .36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .container{
        padding-left:.12rem;
        width:100%;
        height:2.12rem;
    }
    .container .content{
        width:100%;
        height:2.12rem;
        display:flex;
        flex-wrap:nowrap;
        overflow-y:hidden;
        overflow-x:auto;
    }
    .container .content a{
        display:block;
        width:1.15rem;
        margin-right:.12rem;
    }
    .container .content a .product_img{
        height:1.53rem;
        background-image:url(${bg});
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 100px 100px;
        position: relative;
    }
    .product_img img{
        height:100%;
    }
    .container .content .product_txt{
        height:.45rem;
        font-size:.12rem;
        color:#626161;
        padding-top:.05rem;
    }
    .container .content .product_txt .product_name{
        display:block;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
        width:100%;
    }
    .container .content .product_txt .title{
        display:block;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
        width:100%;
    }
    .container .content .product_price{
        font-size:.12rem;
        line-height:.14rem;
    }
    .container .content .product_price .final_price{
        color: #626161;
        font-weight: bold;
    }
    .container .content .product_price .original_price{
        font-size: 10px;
        color: #ccc;
        text-decoration: line-through;
        margin-left: 3px;
    }
`