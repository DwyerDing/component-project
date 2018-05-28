import { appConfig } from '@core';
import apiRequest from './api-request';

class NotificationService {
  constructor () {
    this.serviceUrl = `${appConfig.api.GATEWAY_PREFIX}/notif/web`;
    this.api = {
      GET_NOTIFICATIONS: 'get_web_msgs',
      GET_UNREAD_COUNT: 'unread_num'
    };
  }

  getNotifications (filters, orders, search, pageNumber, size = 50) {
    let url = `${this.serviceUrl}/${this.api.LOGIN}`;
    return apiRequest.post(url, {
      filters,
      orders,
      search,
      pageNumber,
      size
    });
  }

  getUneadCount (categories) {
    let url = `${this.serviceUrl}/${this.api.GET_UNREAD_COUNT}`;
    let params;
    if (categories) {
      params = { search: { categories } };
    }

    return apiRequest.post(url, params);
  }
}
const notificationService = new NotificationService();
export default notificationService;
