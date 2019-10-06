import React, { Component } from 'react'
import { LoginWrapper } from "./styled"
import { Icon } from "antd-mobile"
import Observer from "../../observer"
import connect from"./connect"
import {withRouter} from "react-router-dom"

@connect
class Login extends Component {
constructor(){
    super()
    this.state={
        flag:false,
        userId:'',
        password:''
    }
    Observer.$on("handleLoginFlag",(flag1)=>{
        console.log(flag1,4444)
        this.setState({
            flag:flag1
        })
    })
    Observer.$on("handleGoLogin",(flag2)=>{
        this.setState({
            flag:flag2
        })
    })
}
    render() {
        let {flag,userId,password} =this.state;
        return (
            <LoginWrapper>
                {
                    flag?(<div className="login">
                    <div className="loginIcon">
                        <div className="close" onClick={this.handleClose.bind(this)}>
                            <Icon type="cross" theme="filled" />
                        </div>
                        <div className="title">
                            登录/注册
                        </div>
                        <div className="login-form">
                            <form id="login" onSubmit={this.props.handleLogin.bind(this,userId,password)}>
                                <label>
                                    <span>账号：</span>
                                    <input type="text" value={userId} onChange={this.handleUserLogin.bind(this,1)}/>
                                </label>
                                <label>
                                    <span>密码：</span>
                                    <input type="text" value={password} onChange={this.handleUserLogin.bind(this,2)}/>
                                </label>
                                <p onClick={this.handleRegister.bind(this)}>立即注册</p>
                                <button type="submit" className="btn">登陆</button>
                            </form>
                        </div>
                    </div>
                </div>):""
            }
            </LoginWrapper>
        )
    }
    componentDidMount(){
        // console.log(this.props);
        this.setState({
            flag:this.props.flag
        })
    }
    handleClose(){
        
        this.setState({
            flag:false
        })
    }
    handleRegister(){
        console.log("login-to-register")
        Observer.$emit("handleRegisterFlag",true);
        this.setState({
            flag:false
        })
    }
    handleUserLogin(type,e){
        e.preventDefault();
        let val=e.target.value;
        if(type===1){
            this.setState({
                userId:val
            })
        }else{
            this.setState({
                password:val
            })
        }
    }

}
export default withRouter(Login)
