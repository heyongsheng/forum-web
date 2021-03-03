import request from '../utils/request'

export function getCaptcha(data) {
  return request({
    url: '/public/getCaptcha',
    method: 'get',
    params: data
  })
}
