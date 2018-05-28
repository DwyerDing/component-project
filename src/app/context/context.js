// 应用上下文
import Navigation from './navigation';
import ScheduledJob from './scheduled-job';

class Context {
  navigation;
  scheduledJob;
  setting;

  constructor () {
    this.scheduledJob = new ScheduledJob();
    this.navigation = new Navigation();
  }
}

const appContext = new Context();
export default appContext;
