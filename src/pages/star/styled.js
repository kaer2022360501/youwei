import styled from "styled-components"

export const StarWrapper = styled.div`
   
    margin: 0;
    padding: 0;
    width: 100%;
    /* height: 5rem; */
    vertical-align: baseline;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding-left: .1rem;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    box-sizing: border-box;
    background-color: #f2f2f2;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: scroll;
    .BetterScroll{
        display:flex;
        flex-wrap:wrap 
    }
   .box{
       display:block;
       width:1.72rem;
        height:3.59rem;
       background:#fff;
     
       box-sizing:border-box;
       margin-right:.1rem;
       margin-top:.1rem;
       /* overflow-y:scroll; */
       position:relative;
       .imgIcon{
           width:1.72rem;
          
           img{
            width:1.72rem;
            
           }
         
       }
       .infoIcon{
           background-color: #fff;
           border-radius: 0 0 4px 4px;
           padding: 8px 12px 12px;
           font-size: 12px;
           line-height: 1.5;
    letter-spacing: -.5px;
            p:nth-of-type(1) {
               color:#7a7a7a;
               font-size:.12rem;
            }
            p:nth-of-type(2){
                color: #000;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-top: .09rem;
            }
            p:nth-of-type(3){
                margin-top:.09rem;
                font-size: 14px;
                font-weight: bold;
                color: #000;
            }
       }
   }
  
`