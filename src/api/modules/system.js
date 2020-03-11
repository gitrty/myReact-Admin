import { http } from '@/util/http'

export default {
    // 获取天气预报
    getTianQi: data => http.get(``, { params: data })
}