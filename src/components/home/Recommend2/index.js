import React, { Component } from "react";
import { Container } from "./styled";
import recom2 from "../../../static/img/recom2.jpg";

export default class Recommend2 extends Component {
    render() {
        let { homeRecommendList2 } = this.props

        if (!homeRecommendList2.products || homeRecommendList2.products.length == 0) {
            homeRecommendList2.products = [];
        }
        // console.log(homeRecommendList2.products);
        return (
            <Container>
                <div className="recom_title"></div>
                <div className="w100">
                    <a href="#">
                        <img src={recom2} />
                    </a>
                    <div>DESDESINGER SHOES NEW IN</div>
                </div>
                <div className="container">
                    <div className="content">
                        {
                            homeRecommendList2.products.map((item, key) => (
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