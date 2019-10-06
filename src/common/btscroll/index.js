import React, {Component} from 'react';
import BtScroll from 'better-scroll'
import {Wrapper} from './styled'

 class BetterScroll extends Component {
    render() {
        return (
            <Wrapper ref='Wrapper'>
                {this.props.children}
            </Wrapper>
        );
    }
    componentDidMount(){
        this.scroll=new BtScroll(this.refs.Wrapper,{
            click:true,
            tap:true,
            pullUpLoad:true,
            pullDownRefresh:true
        })
    }
    //上拉加载更多方法
    handlepullingUp(callback){
        this.scroll.on("pullingUp",callback)
    }
    //上拉加载更多加载完毕
    handlefinishPullUp(){
        //告诉better-scroll数据已经加载完毕
        this.scroll.finishPullUp();
        //通知better-scroll重新计算高度
        this.scroll.refresh();
    }
}

export default BetterScroll;
