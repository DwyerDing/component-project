import { Timer } from '@core';
import { authService, notificationService } from '@services';

class ScheduledJob {
  loginJob;
  notificationJob;

  constructor () {
    let period = 300000;

    this.loginJob = new Timer(period, () => {
      return authService.checkLoginStatus();
    });

    this.notificationJob = new Timer(period, () => {
      return notificationService.getUneadCount();
    });
  }

  stopAll () {
    this.loginJob.stop();
    this.notificationJob.stop();
  }
}

export default ScheduledJob;
