import React, { Component } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import { Icon } from '@components';

import './side-menu.scss';
import SideMenuStore from './side-menu.store';

@observer
class SideMenu extends Component {
  constructor (props) {
    super(props);

    this.store = new SideMenuStore();
  }

  handleSideMenuToggle = () => {
    this.store.doSideMenuToggle();
  };

  handleMenuToggle = menuItem => {
    this.store.doMenuToggle(menuItem);
  };

  renderMenuItem (menuItem) {
    return (
      <React.Fragment key={menuItem.id}>
        {menuItem.name && <li className="menu-item group">{menuItem.name}</li>}
        {menuItem.subMenu.map(subItem => {
          let expand = subItem === this.store.expandMenu;

          return (
            <li className={classNames('menu-item', { expand: expand })} key={subItem.id}>
              <div onClick={() => this.handleMenuToggle(subItem)}>
                <Icon
                  className={classNames('menu-icon', { big: subItem.icon.size === 'menu-size-2' })}
                  name={subItem.icon.name}
                />
                <span className="title">{subItem.name}</span>
                {subItem.subMenu && <Icon className="arrow" name={expand ? 'caret-up' : 'caret-down'} />}
              </div>

              {subItem.subMenu && this.renderSubMenuItem(subItem)}
            </li>
          );
        })}
      </React.Fragment>
    );
  }

  renderSubMenuItem (menuItem) {
    return (
      <ul className="sub-menu">
        <li className="sub-menu-item">
          <div>{menuItem.name}</div>
        </li>
        {menuItem.subMenu.map(item => (
          <li key={item.id} className="sub-menu-item">
            <div>
              <Icon name="list-dot" className="list-dot" />
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render () {
    let store = this.store;

    return (
      <aside className={classNames('side-menu', { collapse: store.sideMenuCollapse })}>
        <div className="top-header">
          青藤云安全
          <a className="menu-toggle" onClick={this.handleSideMenuToggle}>
            <Icon name={store.sideMenuCollapse ? 'sidemenu-expand' : 'sidemenu-collapse'} />
          </a>
        </div>
        <div className="scroll-wrapper">
          <ul className="menu-list">{this.props.menu && this.props.menu.map(item => this.renderMenuItem(item))}</ul>
        </div>
      </aside>
    );
  }
}

export default SideMenu;
