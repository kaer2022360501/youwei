import React,{Component} from "react";
import Login from "@pages/login"
import Cookie from 'js-cookie'
export default class Car extends Component{
    constructor(){
        super()
        if(!Cookie.get('token')){
            this.state={
                flag:true
            }
        }else{
            this.state={
                flag:false
            }
        }          
    }
    render(){
        let {flag} =this.state;
        return (
            <div>
                <h2>Car</h2>
                <Login flag={flag}/> 
            </div>
        )
    }
} 