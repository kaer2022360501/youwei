import http from "@utils/http"

export const loginApi=(userId,password)=>http.post('/users/login',{userId,password})

export const registerApi=(userId,password)=>http.post('/users/register',{userId,password})