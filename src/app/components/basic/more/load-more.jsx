import React from 'react';
import Dropdown from 'rc-dropdown';
import BaseMultiple from '../select/multiple-base';

export default class LoadMore extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onVisibleChange = visible => {
    this.setState({
      visible
    });
  };

  render () {
    const { ...other } = this.props;
    return (
      <div className="filter-item">
        <Dropdown
          trigger={['click']}
          onVisibleChange={this.onVisibleChange}
          onVisible={this.state.visible}
          closeOnselect={false}
          overlay={<BaseMultiple titleName="所有条件" {...other} />}
          animation="slide-up"
        >
          <div className="load-more">
            <span>更多</span>
            <i className="fa fa-caret-down" />
          </div>
        </Dropdown>
      </div>
    );
  }
}
