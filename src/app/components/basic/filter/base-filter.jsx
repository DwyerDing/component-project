import React from 'react';

export default class BaseFilter extends React.component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      checkedList: []
    };
  }

  valueInPop (name) {
    if (this.state.checkedList.length > 0) {
      return (
        <span className="len-limited">
          {this.state.checkedList.map((item, index) => {
            if (index > 0) {
              return <span>,{item.name}</span>;
            } else {
              return <span>{item.name}</span>;
            }
          })}
        </span>
      );
    } else {
      return <span className="len-limited">{name}:全部</span>;
    }
  }

  render () {
    const { name, inputValue } = this.props;
    return (
      <div>
        <div className="filter-name">{this.valueInPop(name)}</div>
        {inputValue || this.state.checkedList.length > 0 ? (
          <div className="main-filter-icon clear" onClick={this.clear()}>
            <i className="fa fa-times" />
          </div>
        ) : (
          <div className="main-filter-icon">
            <i className="fa fa-caret-down" />
          </div>
        )}
      </div>
    );
  }
}
