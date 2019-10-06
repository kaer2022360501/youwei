import React,{Component} from "react";
import {NavLink,withRouter} from "react-router-dom";
import {HeadWrapper} from "./styled";
import Observer from "../../../observer"
import Cookie from 'js-cookie'

class Head extends Component{
    render(){
        return (
            <HeadWrapper>
                <ul className="top">
                    <li onClick={this.handleGoLogin.bind(this)}><span className="iconfont icon-wode"></span></li>
                    <li>
                        <div className="search">
                        <NavLink to="/search" >
                            <span className="iconfont icon-sousuo"></span>
                            <span>请输入搜索内容</span>
                        </NavLink>
                        </div>
                    </li>
                    <li><span className="iconfont icon-tubiaozhizuomoban"></span></li>
                </ul>
            </HeadWrapper>
        )
    }
    handleGoLogin(){
        if(!Cookie.get("token")){
            Observer.$emit("handleGoLogin",true);
        }else{
            console.log(this.props.history.push("/mine"))
        }
    }
}
export default withRouter(Head)