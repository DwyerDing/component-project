import { observable, extendObservable } from 'mobx';
import appContext from '@context/context';

class SideMenuStore {
  @observable sideMenuCollapse = false;
  @observable expandMenu;

  doSideMenuToggle () {
    this.sideMenuCollapse = !this.sideMenuCollapse;
    if (this.sideMenuCollapse) {
      this.menuExpand = false;
      this.expandMenu = null;
    }
  }

  doMenuToggle (menuItem) {
    if (!this.sideMenuCollapse) {
      if (!this.expandMenu || this.expandMenu !== menuItem) {
        this.expandMenu = menuItem;
      } else {
        this.expandMenu = null;
      }
    }
  }
}

export default SideMenuStore;
