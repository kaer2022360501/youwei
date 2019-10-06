import React, { Component } from "react";
import { HomeNavWrapper } from "./styled";
import {NavLink} from "react-router-dom";

export default class HomeNav extends Component {
    render() {
        return (
            <HomeNavWrapper>
                <ul className="nav">
                    <li>
                        <NavLink to="/new">
                            <div></div>
                            <p>新品/热销</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sale">
                            <div></div>
                            <p>折扣</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/man">
                            <div></div>
                            <p>男士</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/star">
                            <div></div>
                            <p>明星原款</p>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/sort">
                            <div></div>
                            <p>分类</p>
                        </NavLink>
                    </li>
                </ul>
            </HomeNavWrapper>
        )
    }
}