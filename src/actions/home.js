import http from "@utils/http.js"


export const HOME_ASYNC_ACTION=()=>{
    
    return async (dispatch)=>{
        console.log(111)
        let data=await http.post("/api/web/v1/appversion/checkversionsv4",{
            platform:"M.Web"
        })
        dispatch({type:'home_action',value:data})
    }
}

export const HOME_STAR_ACTION=()=>{

    return async (dispatch)=>{
        let data=await http.post("/api/web/v1/appversion/checkversionsv4",{
            platform:"M.Web"
        })
        dispatch({type:'home_star_action',value:data})
    }
}


// https://ws.wconcept.cn/api/web/v1/appversion/checkversionsv4?platform=M.Web