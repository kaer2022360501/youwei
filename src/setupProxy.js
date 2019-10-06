const proxy =require("http-proxy-middleware");

module.exports=function(app){
    app.use(proxy("/api",{
        target:"https://ws.wconcept.cn",
        changeOrigin:true,
        pathRewrite:{
            '^/api': ''
        }
    })),
    app.use(proxy("/users",{
        target:"http://10.60.13.121:3000",
        changeOrigin:true,
        
    })),
    app.use(proxy("/v1",{
        target:"https://search.wconcept.cn",
        changeOrigin:true,
        
    }))
    
}