import React,{Component} from "react";
import {HomeBannerWrapper} from "./styled";
import pic from "../../../static/img/home_b_banner.gif";


export default class HomeBanner extends Component{
    constructor(){
        super();
        console.log(111,pic);
    }
    render(){
        return (
            <HomeBannerWrapper>
                <a>
                    <img src={pic} />
                </a>
            </HomeBannerWrapper>
        )
    }
}