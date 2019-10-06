import React, { Component } from "react";
import { StarWrapper } from "./styled";
import { connect } from "react-redux";
import { HOME_STAR_ACTION } from "../../../actions/home";

class StarOriginal extends Component {
    constructor() {
        super();
        this.state = {
            // homeStarList:[],
        }
    }

    render() {
        let { homeStarList } = this.props;
        console.log(homeStarList);
        if(!homeStarList.products || homeStarList.products.length==0){
            homeStarList.products=[];
        }
        return (
            <StarWrapper>
                <div className="starTitle">{homeStarList.title}</div>
                <ul className="star">
                   {
                        homeStarList.products.map((item, key) => (
                            <li key={key}>
                                <div><img src={item.thumbnail} /></div>
                                <p className="title_key">{item.title}</p>
                                <p className="descriptions">{item.short_descriptions}</p>
                            </li>
                        ))
                    }
                   
                </ul>
             
            </StarWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    homeList: state.home.homeList
})
const mapDispatchToProps = (dispatch) => ({
    homeStar() {
        dispatch(HOME_STAR_ACTION())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StarOriginal);