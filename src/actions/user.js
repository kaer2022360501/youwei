import { createAction } from "redux-actions";
import { loginApi } from "@api/user"
import Cookie from "js-cookie"

let LOGIN_ACTION = createAction("login_action", data => data)
export const LOGIN_ACTIVE_ACTION = (userId, password) => {
    return async (dispatch) => {
        let data = await loginApi(userId, password);
        if (data.data.code === 1) {
            //登陆成功则把登录信息存cookie中
            Cookie.set("token",data.data)
            dispatch(LOGIN_ACTION(data.data));
            //获取cookie
            console.log(JSON.parse(Cookie.get("token")))
            return true;
            
        }
    }
}