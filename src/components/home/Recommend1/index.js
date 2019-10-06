import React, { Component } from "react";
import { Container } from "./styled";
import recom1 from "../../../static/img/recom1.jpg";

export default class Recommend1 extends Component {

    render() {
        let { homeRecommendList1 } = this.props

        if (!homeRecommendList1.products || homeRecommendList1.products.length == 0) {
            homeRecommendList1.products = [];
        }
        // console.log(homeRecommendList1.products);
        return (
            <Container>
                <div className="recom_title">热门推荐</div>
                <div className="w100">
                    <a href="#">
                        <img src={recom1} />
                    </a>
                    <div>19秋季最时髦的外套都在这里</div>
                </div>
                <div className="container">
                    <div className="content">
                        {
                            homeRecommendList1.products.map((item, key) => (
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



// <a>
// <div className="product_img">
//     <img src={recom2}/>
// </div>
// <div className="product_txt">
//     <div className="product_name">ROLAROLA</div>
//     <span className="title">短款圆领R字母装饰口袋拼接A字吊带连衣裙_藏青色</span>
// </div>
// <div className="product_price">
//     <span className="final_price">￥827</span>
//     <span className="original_price">￥871</span>
// </div>
// </a>
