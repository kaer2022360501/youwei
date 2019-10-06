import {
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

} from "@pages"




export const layoutRoutes = [
    {
        key: "/home",
        path: "/home",
        name: "首页",
        icon: "\ue61c",
        component: Home,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/car",
        path: "/car",
        name: "购物车",
        icon: "\ue607",
        component: Car,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/mine",
        path: "/mine",
        name: "我的",
        icon: "\ue601",
        component: Mine,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    

    // 搜索
    
]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登陆",
        icon: "",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key: "/register",
        path: "/register",
        name: "注册",
        icon: "",
        component: Register,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key: "/search",
        path: "/search",
        name: "搜索",
        icon: "",
        component: Search,
        exact: true,
        meta: {
            requireAuth: false,//false是不登录就能用
            
        }
    },
    {
        key: "/new",
        path: "/new",
        name: "新品",
        icon: "",
        component: New,
        exact: true,
        meta: {
            requireAuth: false,
           
        }
    },
    {
        key: "/sale",
        path: "/sale",
        name: "折扣",
        icon: "",
        component: Sale,
        exact: true,
        meta: {
            requireAuth: false,
            // flag:true
        }
    },
    {
        key: "/man",
        path: "/man",
        name: "男装",
        icon: "",
        component: Man,
        exact: true,
        meta: {
            requireAuth: false,
            
        }
    },
    {
        key: "/star",
        path: "/star",
        name: "明星原款",
        icon: "\ue617",
        component: Star,
        exact: true,
        meta: {
            requireAuth: false,
            // flag:true
        }
    },
    {
        key: "/sort",
        path: "/sort",
        name: "分类",
        icon: "\ue617",
        component: Sort,
        exact: true,
        meta: {
            requireAuth: true,
            // flag:true
        }
    },
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);