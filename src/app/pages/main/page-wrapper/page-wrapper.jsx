import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Menu, Dropdown } from 'antd';
import { Icon } from '@components';

import './page-wrapper.scss';
// import PageWrapperStore from './page-wrapper.store';

@observer
class PageWrapper extends Component {
  render () {
    let accountMenu = (
      <Menu>
        <Menu.Item>
          <a>账户资料</a>
        </Menu.Item>
        <Menu.Item>
          <a>修改密码</a>
        </Menu.Item>
        <Menu.Item>
          <a>购买信息</a>
        </Menu.Item>
        <Menu.Item>
          <a>关于青藤</a>
        </Menu.Item>
        <Menu.Item>
          <a>退出登录</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="page-wrapper">
        <header className="top-bar">
          <div className="nav-header">
            <span className="nav-title">资产清点</span>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Dropdown trigger={['click']} overlay={accountMenu}>
                  <a className="account wave">
                    开发
                    <Icon name="user" />
                  </a>
                </Dropdown>
              </li>
              <li className="nav-menu-item">
                <Dropdown trigger={['click']} overlay={accountMenu}>
                  <a className="notification wave">
                    <Icon name="bell" />
                  </a>
                </Dropdown>
              </li>
            </ul>
          </div>
        </header>
        <section className="page-content">
          <div className="content-wrapper">{this.props.children}</div>
        </section>
      </div>
    );
  }
}

export default PageWrapper;
