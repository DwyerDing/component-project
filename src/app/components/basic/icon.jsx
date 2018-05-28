import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string
  };

  render () {
    return (
      <svg className={classNames('icon', this.props.className)}>
        <use xlinkHref={'#icon-' + this.props.name} />
      </svg>
    );
  }
}

export default Icon;
