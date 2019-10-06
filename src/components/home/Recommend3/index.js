import React, { Component } from "react";
import { Container } from "./styled";
import recom3 from "../../../static/img/recom3.jpg";


export default class Recommend3 extends Component {

    render() {
        let { homeRecommendList3 } = this.props

        if (!homeRecommendList3.products || homeRecommendList3.products.length == 0) {
            homeRecommendList3.products = [];
        }
        // console.log(homeRecommendList3.products);
        return (
            <Container>
                <div className="recom_title"></div>
                <div className="w100">
                    <a href="#">
                        <img src={recom3} />
                    </a>
                    <div>HOWL 2019 FW</div>
                </div>
                <div className="container">
                    <div className="content">
                        {
                            homeRecommendList3.products.map((item, key) => (
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