// 全局的配置信息 baseUrl language

const appConfig = {
  api: {
    BASE_URL: '../',
    TIMEOUT: 60000, // 1 minutes
    CONTENT_TYPE: 'application/json;charset=UTF-8',
    GATEWAY_PREFIX: '/v1/assets'
  },
  cache: {
    expires: 300000 // 5 minutes
  },
  notification: {
    top: 24,
    duration: 3,
    placement: 'topRight'
  }
};

export default appConfig;
