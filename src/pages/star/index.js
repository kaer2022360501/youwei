import React, { Component } from 'react'
import { StarWrapper } from "./styled"
import { connect } from "react-redux"
import { STAR_ACTION } from "../../actions/star"
import BetterScroll from '@common/btscroll'


const mapStateToProps = (state) => ({
    starList: state.star.starList,
    virtual_item: state.star.virtual_item,
    page: state.star.page,
    limit: state.star.limit
})
const mapDispatchToProps = (dispatch) => ({
   async handleStarList(virtual_item, page, limit) {
      let data= await dispatch(STAR_ACTION(virtual_item, page, limit));
        return data
    }
})
@connect(mapStateToProps, mapDispatchToProps)
class Star extends Component {

    render() {
        // console.log(this.props,"99999props")
        let { starList } = this.props;
        console.log(starList,"757557557starList")
        if (!starList.items || starList.items.length === 0) { starList.items = [] }

        return (
            <StarWrapper>
                <BetterScroll ref="bscroll">
                    <div className="BetterScroll">
                        {
                            starList.map((item, index) => (
                                <div key={index} className="box">
                                    <div className="imgIcon">
                                        <img src={item.main_image.image} alt="" />
                                    </div>

                                    <div className="infoIcon">
                                        <p>{item.short_content}</p>
                                        <p>{item.goodsList.name}</p>
                                        <p>{item.goodsList.formatted_price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </BetterScroll>

            </StarWrapper>
        )




    }
    
    componentDidMount() {
        // console.log(111)
        this.props.handleStarList(this.props.virtual_item, this.props.page, this.props.limit);
       this.refs.bscroll.handlepullingUp(async() => {
           let data=await this.props.handleStarList(this.props.virtual_item, this.props.page, this.props.limit);
            if(data){
                this.refs.bscroll.handlefinishPullUp();
            }
        })
    }
}

export default Star
