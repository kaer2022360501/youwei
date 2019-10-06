import React, { Component } from 'react'
import { LoginWrapper } from "@pages/login/styled"
import { Icon ,Toast} from "antd-mobile"
import Observer from "../../observer"
import { registerApi } from "@api/user"
import { withRouter } from "react-router-dom"

 class Register extends Component {
    constructor() {
        super()
        this.state = {
            flag: false,
            userId: "",
            password: ""
        }
        Observer.$on("handleRegisterFlag", (flags) => {
            console.log(flags, 1111)
            this.setState({
                flag: flags
            })
        })
        // console.log(this.state.flag)

    }
    render() {
        let { flag, userId, password } = this.state;
        if(!flag){
            return ''
        }else{
            return (
                <LoginWrapper>
                  
                       <div className="login">
                            <div className="loginIcon">
                                <div className="close" onClick={this.handleClose.bind(this)}>
                                    <Icon type="cross" theme="filled" />
                                </div>
                                <div className="title">
                                    登录/注册
                            </div>
                                <div className="login-form">
                                    <form id="login" onSubmit={this.handleRegister.bind(this)}>
                                        <label>
                                            <span>账号：</span>
                                            <input type="text" value={userId} onChange={this.handleUser.bind(this, 1)} />
                                        </label>
                                        <label>
                                            <span>密码：</span>
                                            <input type="text" value={password} onChange={this.handleUser.bind(this, 2)} />
                                        </label>
                                        <p onClick={this.handleLoginFlag.bind(this)}>已有账号,立即登陆</p>
                                        <button type="submit" className="btn">注册</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   
                </LoginWrapper>
            )
        }
        
    }
    handleClose() {
        this.setState({
            flag: false
        })
    }
    handleLoginFlag() {
        console.log("register-to-login")
        Observer.$emit("handleLoginFlag", true);
        this.setState({
            flag: false
        })
    }

    handleUser(type, e) {
        let val = e.target.value;
        if (type === 1) {
            this.setState({
                userId: val
            })
        } else {
            this.setState({
                password: val
            })
        }
    }
    async handleRegister(e) {
        e.preventDefault();

        let userId = this.state.userId;
        let password = this.state.password;

        let data = await registerApi(userId, password);
        console.log(data);

        if (data.data.code === 1) {
            Toast.success('注册成功,请登录',2);
            this.handleLoginFlag();
        }
    }
}
export default withRouter(Register)