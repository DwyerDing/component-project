import React from 'react';
import PropTypes from 'prop-types';

export default class BaseSearch extends React.Component {
  inputChange = e => {
    this.props.handleChange(e.target.value);
  };

  search () {
    if (this.props.inputValue !== '') {
      this.props.search() && this.props.search(this.props.inputValue);
    }
  }

  render () {
    const { inputValue, name } = this.props;
    return (
      <div className="basic-search">
        <div className="search-area">
          <input
            className="search-input"
            type="text"
            name={name}
            id={name}
            value={inputValue}
            autoFocus="autoFocus"
            onChange={e => {
              this.inputChange(e);
            }}
            onKeyDown={this.clickEnter()}
            placeholder="请输入搜索项名"
          />
          <div className="search-icon" onClick={this.search}>
            <i className="fa fa-search" />
          </div>
        </div>
      </div>
    );
  }
}
