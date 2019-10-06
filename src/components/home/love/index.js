import React, { Component } from "react";
import { Container } from "./styled";
import love1 from "../../../static/img/love1.jpg";
import love2 from "../../../static/img/love2.jpg";
import { homeLoveApi } from "@api/homelove"

export default class Love extends Component {
    constructor() {
        super()
        this.state = {
            loveList: []
        }
    }
    render() {
        let { loveList } = this.state;
        console.log(loveList, "lovelove");
        if (!loveList || loveList.length === 0) { loveList = [] }
        return (
            <Container>
                <div className="group-title">猜你喜欢</div>
                <div className="container">
                    {
                        loveList.map((item, key) => (
                            <div key={key} className="content">
                                <a href="">
                                    <div className="product_img">
                                        <img src={item.image_url} />
                                    </div>
                                    <div className="product_txt">
                                        <div className="product_name">{item.brand_name}</div>
                                        <span className="title">{item.name}</span>
                                    </div>
                                    <div className="product_price">
                                        <span className="final_price">{item.final_price}</span>
                                        <span className="original_price">{item.price}</span>
                                    </div>
                                </a>
                            </div>
                        ))
                    }



                </div>
            </Container>
        )
    }
    componentDidMount() {
        homeLoveApi().then((data) => {
            console.log(data);
            this.setState({
                loveList: data.items
            })
        });

    }
}

// <div className="content">
//                         <a href="">
//                             <div className="product_img">
//                                 <img src={love1}/>
//                             </div>
//                             <div className="product_txt">
//                                 <div className="product_name">Even Vintage</div>
//                                 <span className="title">时尚博主 Suggy_L 原款小荷叶边撞色简约Polo针织衫Even Vintage原创设计师品牌SPR19</span>
//                             </div>
//                             <div className="product_price">
//                                 <span className="final_price">￥607</span>
//                                 <span className="original_price">￥807</span>
//                             </div>
//                         </a>
//                     </div>