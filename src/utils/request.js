import axios from "axios"
import store from "../store"

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout :5000
})

service.interceptors.request.use((config)=>{
    // 将token请求头部发送给后台
    const token = store.getters.token
    if (token) config.headers.Authorization = token

    return config
},(error) => {
    return Promise.reject(error)
})

service.interceptors.response.use((response)=>{

   return response
},(error)=>{
    return Promise.reject(error)
})

const request = (options) => {
    options.params = options.method.toLocaleLowerCase()=== "get" ? options.data :{}
    return service(options)
}
export default request