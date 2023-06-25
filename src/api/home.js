import request from '@/utils/request'
// 请求左侧导航栏 品牌项 的弹出数据
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}

// 获取广告图
export const findBanner = () => {
  return request('/home/banner', 'get')
}
