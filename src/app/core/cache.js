// 缓存
// 缓存常用接口数据
class Cache {
  cache = {};
  expires = 0;

  constructor (expires) {
    this.expires = expires;
  }

  set (key, value) {
    let timeNow = new Date().getTime();
    this.cache[key] = { value: value, expires: this.expires === 0 ? this.expires : timeNow + this.expires };
  }

  get (key) {
    let timeNow = new Date().getTime();
    let cacheObj = this.cache[key];
    if (cacheObj.expires !== 0 && cacheObj.expires <= timeNow) {
      return cacheObj.value;
    } else if (cacheObj.expires > timeNow) {
      this.remove(key);
      return null;
    }
  }

  once (key) {
    let cacheObj = this.get(key);
    this.remove(key);
    return cacheObj;
  }

  remove (key) {
    this.cache[key] = null;
  }

  clear () {
    this.cache = {};
  }
}
