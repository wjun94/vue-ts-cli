import axios from 'axios';
import {
  ElMessage
} from 'element-plus'

/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***  例如：http://cangdu.org
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 其他更多拓展参看axios文档后 自行拓展
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
 */

const ENV = process.env.REACT_APP_SECRET_CODE

// 基础路径 、基础路由
let apiUrl;
switch (ENV) {
  case 'production':
    apiUrl = 'https://api.mobilemart.cn'
    break
  case 'pre':
    apiUrl = 'https://test-api.mobilemart.cn'
    break
  default:
    apiUrl = 'https://dev-api.mobilemart.cn'
}

export default class Server {

  axios(method, url, params) {
    return new Promise((resolve, reject) => {
      if (typeof params !== 'object') params = {};
      let _option = {
        method,
        url,
        baseURL: apiUrl,
        timeout: 30000,
        params: method === 'get' ? params : {},
        data: params,
        headers: {
          'x-authtoken-with': 'QYAPPSESSION_KEY_9f2147db-e128-4a39-a106-fcbc7f5dfb0c',
        },
        validateStatus: (status) => {
          return status >= 200 && status < 300;
        },
        // ...params,
      }
      axios.defaults.headers.post['Content-Type'] = 'application/json'
      axios.request(_option).then(res => {
        if (res.data.error_code === 0) {
          resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
        } else {
          ElMessage.error(res.data.err_msg || '接口异常');
        }
      }, error => {
        if (error.response) {
          reject(error.response.data)
        } else {
          reject(error)
        }
      })
    })
  }
}