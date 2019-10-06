import styled from "styled-components";

export const HeadWrapper =styled.div`
    .top{
        display:flex;
        width:100%;
        height:.6rem;
        border-bottom:.01rem solid #f3f3f3;
        position:fixed;
       
        z-index:2;
        left:0;
        top:0;
        background:#fff;
    }
    .top li {
        line-height:.6rem;
        font-size:.5rem;
        
    }
    .top li:nth-of-type(1){
        width:.57rem;
        text-align:center;
    }
    .top li:nth-of-type(1) .iconfont{
        font-size:.3rem;
    }
    .top li:nth-of-type(3){
        width:.57rem;
        text-align:center;
    }
    .top li:nth-of-type(3) .iconfont{
        font-size:.3rem;
    }
    .top li:nth-of-type(2){
        flex:1;
        padding-top:.12rem;
    }
    .top li:nth-of-type(2) .search{
        background-color:#f3f3f3;
        height:.35rem;
        line-height:.35rem;
        font-size:.15rem;
        border-radius:.2rem;
        padding-left:.25rem;
        
    }
    .top li:nth-of-type(2) .search .iconfont{
        font-size:.2rem;
    }
`