import Loadable from "react-loadable";
import Loading from "@common/loading";


// 首页
const Home  = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

// 购物车
const Car  = Loadable({
    loader:()=>import("./car"),
    loading:Loading
})

// 我的
const Mine  = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

// 新品
const New  = Loadable({
    loader:()=>import("./new"),
    loading:Loading
})

// 折扣
const Sale  = Loadable({
    loader:()=>import("./sale"),
    loading:Loading
})

// 男装
const Man  = Loadable({
    loader:()=>import("./man/index.js"),
    loading:Loading
})

// 明星原款
const Star  = Loadable({
    loader:()=>import("./star"),
    loading:Loading
})

// 分类
const Sort  = Loadable({
    loader:()=>import("./sort"),
    loading:Loading
})

// 登录
const Login  = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

// 注册
const Register  = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

// 搜索
const Search  = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})

export {
    Home,//首页
    Car,//购物车
    Mine,//我的
    New,//新品
    Sale,//折扣
    Man,//男装
    Star,//明星原款
    Sort,//分类
    Login,//登录
    Search,//搜索
 
    Register,//注册
}
