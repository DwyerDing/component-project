import { appConfig } from '@core';
import apiRequest from './api-request';

class PermissionService {
  constructor () {
    this.serviceUrl = `${appConfig.api.GATEWAY_PREFIX}/permission`;
    this.api = {
      IS_MAIN_USER: 'user/is_main_user',
      REMOVE_USER: 'user/remove',
      GET_USER_INFO: 'user/getselfinfo',
      GET_NAVIGATION_LIST: 'nav/list'
    };
  }

  isManUser () {
    let url = `${this.serviceUrl}/${this.api.IS_MAIN_USER}`;
    return apiRequest.post(url);
  }

  removeUser (userId, password) {
    let url = `${this.serviceUrl}/${this.api.REMOVE_USER}`;
    return apiRequest.post(url, { params: { userid: userId, password } });
  }

  getUserInfo () {
    let url = `${this.serviceUrl}/${this.api.GET_USER_INFO}`;
    return apiRequest.post(url);
  }

  getNavigationList () {
    let url = `${this.serviceUrl}/${this.api.GET_NAVIGATION_LIST}`;
    return apiRequest.post(url);
  }
}
const permissionService = new PermissionService();
export default permissionService;
