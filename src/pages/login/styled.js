import styled from "styled-components"

export const LoginWrapper=styled.div`
    
    .login{
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        top:0;
        background:rgba(0,0,0,0.3)
    }
    .loginIcon{
        width:80%;
        height:2.86rem;
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        background:#fff;
        border-radius:.04rem;
    }
    .close{
        position:absolute;
        top:0;
        right:0;
        width:.4rem;
        height:.4rem;
        font-size:.2rem;
        text-align:center;
        line-height:.4rem;      
    }
    .title{
        padding-top:.3rem;
        font-size:.2rem;
        line-height:.28rem;
        text-align:center;
        font-weight:bold;
        color:#000;
    }
    .login-form{
        padding:.4rem;
        font-size:.18rem;
        /* color:#000; */
        font-weight:bold;
    }
    label{
        display:block;
        margin-bottom:.1rem;
        border-bottom:1px solid #ccc;
    }
    .btn{
        width:100%;
        height:.33rem;
        margin-top:.1rem;
        
    }
`