// 计划任务，可全局开启和关闭
// 1. 定时查询用户状态
// 2. 定时获取消息通知
class Timer {
  period = 10000; // 5s
  execution;
  timer;
  running;

  constructor (period, fnExecution) {
    this.period = period;
    this.execution = fnExecution;
  }

  defer () {
    this.running = true;
    this.timer = setTimeout(() => {
      if (this.running === true) {
        this.execution();
        clearTimeout(this.timer);
        this.running = false;
      }
    }, this.period);
  }

  every () {
    this.running = true;

    this.timer = setInterval(() => {
      if (this.running === true) {
        this.execution();
      } else {
        clearInterval(this.timer);
        this.running = false;
      }
    }, this.period);
  }

  poll (fnCallback) {
    this.running = true;

    let startTicket = new Date().getTime();
    let promise = this.execution();

    if (promise && promise instanceof Promise) {
      promise.then(res => {
        if (fnCallback) {
          fnCallback(res);
        }

        if (this.running === true) {
          let endTicket = new Date().getTime();
          let timeSpan = endTicket - startTicket;
          if (timeSpan < this.period) {
            setTimeout(() => {
              this.poll(fnCallback);
            }, this.period - timeSpan);
          } else {
            this.poll(fnCallback);
          }
        }
      });
    }
  }

  stop () {
    this.running = false;
  }
}

export default Timer;
