import http from '@utils/http'

export const homeLoveApi=()=>http.get("/v1/similar-goods?user-id=674468&page=1&limit=20")
    // https://search.wconcept.cn/v1/similar-goods?user-id=674468&page=1&limit=20
