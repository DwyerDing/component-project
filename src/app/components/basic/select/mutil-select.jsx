import React, { Component } from 'react';
import Dropdown from 'rc-dropdown';
import { BaseFilter, BaseSearch } from '../filter/base-filter';
import { BaseMultiple } from './multiple-base';
import Search from '../search/search';

export default class MultipleFilter extends React.Component {
  selected = [];
  constructor (props) {
    super(props);
    this.data = this.props.data;
    this.state = {
      visible: false,
      data: this.data,
      selectedList: [],
      inputValue: ''
    };
  }

  onVisibleChange = visible => {
    this.setState({
      visible
    });
  };

  handlePopChange (input) {
    this.setState({
      inputValue: input
    });
  }

  searchInput (e) {
    let value = e.target.value;
    if (value) {
      this.state.data = this.data.map(item => {
        if (item.name.includes(value)) {
          return item;
        }
      });
    }
  }

  render () {
    let showData = this.state.data;
    let { ...others } = this.props;
    let multiple = (
      <div>
        <BaseSearch
          inputValue={this.state.inputValue}
          handleChange={this.handlePopChange}
        />
        <BaseMultiple {...others} />
      </div>
    );
    return (
      <div>
        <Dropdown
          trigger={['click']}
          onVisibleChange={this.onVisibleChange}
          onVisible={this.state.visible}
          closeOnselect={false}
          overlay={multiple}
          animation="slide-up"
        >
          <BaseFilter {...others} />
        </Dropdown>
      </div>
    );
  }
}
