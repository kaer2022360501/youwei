import styled from "styled-components";

export const SwiperContainer = styled.div`
    width:100%;
    min-height:2rem;
    position:relative;
    overflow:hidden;
    .swiper-content{
        display:flex;
        position:absolute;
        left:0;
        transition:left 0.2s ease-in-out;
        img{
            width:100%;
            height:100%;
        }
    }
    .swiper-spot{
        width:100%;
        display:flex;
        justify-content:center;
        position:absolute;
        bottom:10px;
        div{
            width:.08rem;
            height:.08rem;
            background:#fff;
            border-radius:50%;
            margin:10px;
        }
        .active{
            background:#ea0;
        }
    }
`