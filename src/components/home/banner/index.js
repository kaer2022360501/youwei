import React, { Component } from 'react';
import { BannerWrapper } from "./styled";
import Swiper from '@lib/swiper'
export default class Banner extends Component {
  constructor() {
    super()
    this.state = {
      banner: [
        {
          imgUrl: "https://img01.wconceptimg.cn/ws/uploads/2019/09/1569807144vipabanner-new.jpg!/fw/640/quality/80"
        },
        {
          imgUrl: "https://img01.wconceptimg.cn/ws/uploads/2019/09/1569837499nabanner02.jpg!/fw/640/quality/80"
        },
        {
          imgUrl: "https://img01.wconceptimg.cn/ws/uploads/2019/09/1569837499nabanner03.jpg!/fw/640/quality/80"
        },
        {
          imgUrl: "https://img01.wconceptimg.cn/ws/uploads/2019/10/1570096316100303.jpg!/fw/640/quality/80"
        },
        {
          imgUrl: "https://img01.wconceptimg.cn/ws/uploads/2019/09/1569837499nabanner05.jpg!/fw/640/quality/80"
        },
      ]
    }
  }
  render() {
    return (
      <BannerWrapper>
        <Swiper swiperItems={this.state.banner}></Swiper>
      </BannerWrapper>
    )
  }
}
