import axios from 'axios';
import { notification } from 'antd';
import { appConfig, appConsts } from '@core';
import { resCommon } from '@resources';

const apiRequest = axios.create({
  baseURL: appConfig.api.BASE_URL,
  timeout: appConfig.api.TIMEOUT,
  headers: {
    'Content-Type': appConfig.api.CONTENT_TYPE
  }
});

apiRequest.interceptors.request.use(reqConfig => {
  if (reqConfig.method === 'get') {
    let timestamp = new Date().getTime();
    reqConfig.url += '?_=' + timestamp;
  }

  if (reqConfig.method === 'post' || reqConfig.method === 'put') {
    if (reqConfig.data === undefined) {
      reqConfig.data = null;
    }
  }

  return reqConfig;
});

apiRequest.interceptors.response.use(
  response => {
    // success
    let data = response.data;
    if (data && data.success === false) {
      if (data.errorCode === appConsts.errorCode.IN_MAINTENANCE) {
        // go upgrade
      } else if (
        data.errorCode === appConsts.errorCode.SESSION_NULL ||
        data.errorCode === appConsts.errorCode.INVALID_SESSION
      ) {
        // go login
      }
    }
    return response.data;
  },
  ({ response }) => {
    let data = response.data;
    // fail
    notification.error({
      description: data.errorDesc || resCommon.NO_RESPONSE
    });
    return Promise.reject(data);
  }
);

export default apiRequest;
