// import http from "@utils/http.js"
// import star_page from '@src/api/star'
import { star_page } from "../api/star"


export const STAR_ACTION=(virtual_item,page,limit)=>{
    
    return async (dispatch)=>{
        // console.log(111)
       let data=await star_page(virtual_item,page,limit);
        dispatch({type:'star_action',value:data})
        if(data)return true;
    }
} 