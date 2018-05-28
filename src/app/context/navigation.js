class Navigation {
  navList = [];
  navigations = {};
  sideMenu = [];

  init (navs) {
    this.navList = navs.sort((a, b) => a.order - b.order).map(item => {
      let navItem = {
        id: item.key,
        name: item.display,
        level: parseInt(item.degree),
        access: item.access, // 权限设置 true/false
        active: parseInt(item.active), // 菜单设置 1/2/3/4 = 启用/启用但隐藏/禁用/禁用但显示
        type: parseInt(item.type),
        order: parseInt(item.order),
        icon: this.getIconSetting(item.icon)
      };
      if (item.route && navItem.type === 1) {
        let route = JSON.parse(item.route);
        navItem.route = route.name;
        navItem.url = route.href;
      }
      return navItem;
    });

    this.navList.forEach(item => {
      this.navigations[item.key] = item;
    });
  }

  getSideMenu () {
    if (!this.sideMenu || this.sideMenu.length === 0) {
      this.generateSideMenu();
    }
    return this.sideMenu;
  }

  // 菜单是否有权限
  hasPermission (key) {
    return this.permisions[key].access;
  }

  // 判断是否是禁用URL
  isUrlAccessible (url) {
    let access = true;
  }

  generateSideMenu () {
    let lastItem;
    let parents = [];

    for (let i = 0, len = this.navList.length; i < len; i++) {
      let navItem = this.navList[i];
      if (navItem.type === 1 && navItem.access !== false && navItem.active === 1) {
        let menuItem = { ...this.navList[i] };

        if (!lastItem) {
          lastItem = navItem;
        }

        if (menuItem.level > lastItem.level) {
          parents.push(lastItem);
        } else if (lastItem.level > menuItem.level) {
          parents.pop();
        }

        if (menuItem.level === 1) {
          this.sideMenu.push(menuItem);
        } else {
          let parent = parents[parents.length - 1];
          if (parent.subMenu) {
            parent.subMenu.push(menuItem);
          } else {
            parent.subMenu = [menuItem];
          }
        }

        lastItem = menuItem;
      }
    }
  }

  getIconSetting (icon) {
    if (icon) {
      let setting = icon.split(' ');
      return {
        name: setting[0],
        size: setting[1]
      };
    }
  }
}

export default Navigation;
