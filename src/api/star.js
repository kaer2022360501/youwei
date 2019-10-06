import http from '@utils/http';

export const star_page=(virtual_item,page,limit)=>http.get("/api/api/web/v1/appstararticles",{
    virtual_item:virtual_item,
    page:page,
    limit:limit
})

