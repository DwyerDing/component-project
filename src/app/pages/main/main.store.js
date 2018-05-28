import { observable } from 'mobx';
import appContext from '@context/context';
import { authService, permissionService } from '@services';

class MainStore {
  @observable sideMenu;

  init () {
    let username = 'lihua.huang@qingteng.cn';
    let password = '123456';

    authService.login(username, password).then(res => {
      // appContext.scheduledJob.start();
      permissionService.getNavigationList().then(res => {
        let data = res.data;
        appContext.navigation.init(data.rows);

        this.sideMenu = appContext.navigation.getSideMenu();

        appContext.scheduledJob.loginJob.poll(res => {
          if (!res.success) {
            // logout
            appContext.scheduledJob.loginJob.stop();
          }
        });

        appContext.scheduledJob.notificationJob.poll(res => {
          // update notification count
        });
      });
    });
  }
}

const mainStore = new MainStore();
export default mainStore;
