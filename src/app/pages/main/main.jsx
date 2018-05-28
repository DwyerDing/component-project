import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import { observer } from 'mobx-react';
import { Menu, Dropdown } from 'antd';
import SideMenu from './side-menu/side-menu';
import PageWrapper from './page-wrapper/page-wrapper';
// import routes from "./main.route";
import mainStore from './main.store';

@observer
class Main extends Component {
  constructor () {
    super();
    this.store = mainStore;
    this.store.init();
  }

  render () {
    return (
      <div className="layout">
        <SideMenu menu={this.store.sideMenu} />
        <PageWrapper>
          {/* {routes.map(route => {
            <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />;
          })} */}

          <div>bbbbbbbbbbbbbbbbbbbb</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaa</div>
        </PageWrapper>
      </div>
    );
  }
}

export default Main;
