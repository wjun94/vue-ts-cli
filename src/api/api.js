import Server from './server';

class API extends Server {

  /**
   *  @todo 获取城市的设备情况
   *  @method get
   *  @return {promise}
   */
  async getConfig(params = {}) {
    try {
      let result = await this.axios('get', `/crm/ad-monit/city/config`, params);
      return result.data
    } catch (err) {
      throw err;
    }
  }

  /**
   *  @todo 添加监播记录
   *  @method get
   *  @return {promise}
   */
  async addRecord(params = {}) {
    try {
      let result = await this.axios('post', `/crm/ad-monit/record`, params);
      return result.data
    } catch (err) {
      throw err;
    }
  }
}

export default new API();