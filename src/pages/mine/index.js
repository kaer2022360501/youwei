import React, { Component } from "react";
import Login from '@pages/login'
import Cookie from 'js-cookie'
import { MineWapper } from './styled'

export default class Mine extends Component {
    constructor() {
        super()
        if (!Cookie.get('token')) {
            this.state = {
                flag: true
            }
        } else {
            this.state = {
                flag: false
            }
        }
    }
    render() {
        let { flag } = this.state;
        return (
            <MineWapper>
                <div className="mine">
                    <div className="nameIcon">
                        <img src="https://img01.wconceptimg.cn/media/huodong/2019/09/09_26/banner.jpg" alt="用户头像" />
                        <div className="info">
                            <h2>157****3267</h2>
                            <p>
                                <span>普通会员</span>
                                <span className="line"></span>
                                <span>0积分</span>
                            </p>
                        </div>
                    </div>
                    <Login flag={flag} />
                </div>
            </MineWapper>
        )

    }
}