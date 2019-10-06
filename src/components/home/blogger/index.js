import React, { Component } from "react";
import { Container } from "./styled";

export default class Blogger extends Component {

    render() {
        let { homeBloggerList } = this.props;
        console.log(homeBloggerList);
        if (!homeBloggerList.products || homeBloggerList.products.length == 0) {
            homeBloggerList.products = [];
        }
        return (
            <Container>
                <div className="starTitle">{homeBloggerList.title}</div>
                <ul className="star">
                    {
                        homeBloggerList.products.map((item, key) => (
                            <li key={key}>
                                <div><img src={item.thumbnail}/></div>
                                <p className="title_key">{item.title}</p>
                                <p className="descriptions">{item.short_descriptions}</p>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        )
    }
}


// 