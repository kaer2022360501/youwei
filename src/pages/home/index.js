import React,{Component} from "react";
import {HomeWrapper} from "./styled";

import Head from "@components/home/head";
import Banner from "@components/home/banner";
import HomeNav from "@components/home/homeNav";


import HomeBanner from "@components/home/home_banner";
import StarOriginal from "@components/home/starOriginal";
import Blogger from "@components/home/blogger";
import Recommend1 from "@components/home/Recommend1";
import Recommend2 from "@components/home/Recommend2";
import Recommend3 from "@components/home/Recommend3";
import Recommend4 from "@components/home/Recommend4";
import Love from "@components/home/love";


import Login from "@pages/login"
import Register from "@pages/register"


import {connect} from "react-redux";
import {HOME_ASYNC_ACTION} from "../../actions/home"
import axios from "axios"



class Home extends Component{
    constructor(){
        super();
        this.state={
            homeStarList:[],
            homeBloggerList:[],
            homeRecommendList1:[],
            homeRecommendList2:[],
            homeRecommendList3:[],
            homeRecommendList4:[],
        }
    }
    render(){
        let {homeStarList,
            homeBloggerList,
            homeRecommendList1,
            homeRecommendList2,
            homeRecommendList3,
            homeRecommendList4
        }=this.state;
        return(
            <HomeWrapper>
                <Head/>
                <Banner/>
                <HomeNav/>

                <HomeBanner/>
                <StarOriginal  homeStarList={homeStarList}/>
                <Blogger homeBloggerList={homeBloggerList}/>
                <Recommend1 homeRecommendList1={homeRecommendList1}/>
                <Recommend2 homeRecommendList2={homeRecommendList2}/>
                <Recommend3 homeRecommendList3={homeRecommendList3}/>
                <Recommend4 homeRecommendList4={homeRecommendList4}/>
                <Love/>

                <Login/>
                <Register/>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        axios.post("https://ws.wconcept.cn/api/web/v1/appversion/checkversionsv4?platform=M.Web",).then(data=>{
            console.log(data);
            let homeStarData=data.data.configurations[2].groups[8]
            let homeBloggerData=data.data.configurations[2].groups[9]
            let homeRecommendData1=data.data.configurations[2].groups[12].product_sources[0]
            let homeRecommendData2=data.data.configurations[2].groups[12].product_sources[1]
            let homeRecommendData3=data.data.configurations[2].groups[12].product_sources[2]
            let homeRecommendData4=data.data.configurations[2].groups[12].product_sources[3]
            console.log(homeRecommendData4);
            this.setState({
                homeStarList:homeStarData,
                homeBloggerList:homeBloggerData,
                homeRecommendList1:homeRecommendData1,
                homeRecommendList2:homeRecommendData2,
                homeRecommendList3:homeRecommendData3,
                homeRecommendList4:homeRecommendData4,
            })
        })
    
        // this.props.handleHomeAsync();

    }
}

const mapStateToProps=(state)=>({
    homeList:state.home.homeList
})
const mapDispatchToProps=(dispatch)=>({
    handleHomeAsync(){
        dispatch(HOME_ASYNC_ACTION())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);