import React,{Component} from "react";
import {Container} from "./styled";
import recom4 from "../../../static/img/recom4.jpg";

export default class Recommend4 extends Component{
    render(){
        let { homeRecommendList4 } = this.props

        if (!homeRecommendList4.products || homeRecommendList4.products.length == 0) {
            homeRecommendList4.products = [];
        }
        console.log(homeRecommendList4.products);
        return (
            <Container>
            <div className="recom_title"></div>
            <div className="w100">
                <a href="#">
                    <img src={recom4} />
                </a>
                <div>如果担心一下子不能驾驭整套复古LOOK，那么就先来一只复古的包包吧！</div>
            </div>
            <div className="container">
                <div className="content">
                    {
                        homeRecommendList4.products.map((item, key) => (
                            <a key={key}>
                                <div className="product_img">
                                    <img src={item.thumbnail} />
                                </div>
                                <div className="product_txt">
                                    <div className="product_name">{item.brand}</div>
                                    <span className="title">{item.title}</span>
                                </div>
                                <div className="product_price">
                                    <span className="final_price">{item.price}</span>
                                    <span className="original_price">{item.original_price}</span>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
            </Container>
        )
    }
}