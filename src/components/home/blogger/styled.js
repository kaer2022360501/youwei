import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    .starTitle{
        color: #000;
        font-size: .18rem;
        line-height: .5rem;
        font-weight: bold;
        padding-left: .12rem;
        margin-top: .3rem;
    }
    .star{
        height:2.98rem;
        display:flex;
        flex-wrap:nowrap;
        /* margin-bottom:.6rem; */
        /* width:100%; */
        overflow-y:hidden;
        overflow-x:auto;
        padding-left: .12rem;
    }
    .star li{
        height:2.98rem;
        width:1.88rem;
        /* background:skyblue; */
        margin-right:.12rem;
    }
    .star li div{
        width:1.88rem;
        height:2.5rem;
    }
    .star li div img{
        width:100%;
        height:100%;
    }
    .title_key{
        color:#000;
        font-size:.13rem;
        line-height:.18rem;
        padding-top:.13rem;

    }
    .descriptions{
        color: #7a7a7a;
        font-size: .1rem;
        line-height: .14rem;
        padding-top: .03rem;
    }
`;

