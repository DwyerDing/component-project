import apiRequest from './api-request';

class AuthService {
  constructor () {
    this.serviceUrl = '/v1/api/front';
    this.api = {
      LOGIN: 'login',
      LOGOUT: 'logout',
      CHECK_LOGIN_STATUS: 'logincheck'
    };
  }

  login (username, password) {
    let url = `${this.serviceUrl}/${this.api.LOGIN}`;
    return apiRequest.post(url, {
      username,
      password
    });
  }

  logout () {
    let url = `${this.serviceUrl}/${this.api.LOGOUT}`;
    return apiRequest.post(url);
  }

  checkLoginStatus () {
    let url = `${this.serviceUrl}/${this.api.CHECK_LOGIN_STATUS}`;
    return apiRequest.post(url);
  }
}
const authService = new AuthService();
export default authService;
