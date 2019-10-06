// import {loginApi} from "@api/user"
import {connect} from "react-redux"
import {LOGIN_ACTIVE_ACTION} from "@actions/user"

const mapStateToProps=()=>({

})
const mapDispatchToProps=(dispatch)=>({
    async handleLogin(userId,password,e){
        e.preventDefault();
        let data=await dispatch(LOGIN_ACTIVE_ACTION(userId,password))
        if(data){
            // console.log(this.props,6666666)
            this.props.history.push("/mine")
        }else{
            this.props.history.push("/home")
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)