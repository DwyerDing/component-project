import React from 'react';
import Trigger from 'rc-trigger';
import { BaseSearch, BaseFilter } from '@components';

function getPopupContainer (trigger) {
  return trigger.parentNode;
}

const builtinPlacements = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
};

export default class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: this.props.inputValue
    };
  }

  clear () {
    if (this.state.inputValue) {
      this.setState({ inputValue: '' });
    }

    if (this.state.checkedList && this.state.checkedList.length > 0) {
    }
  }

  handlePopChange (value) {
    this.setState({ inputValue: value });
  }

  getPopupAlign (state) {
    return {
      offset: [state.offsetX, state.offsetY],
      overflow: {
        adjustX: 1,
        adjustY: 1
      }
    };
  }

  searchInput (input) {
    this.props.onSearch() && this.props.onSearch(input);
  }

  valueInPop (name, type) {
    if (type === 'search') {
      if (this.state.inputValue) {
        return (
          <span className="len-limited">
            {name}:{this.state.inputValue}
          </span>
        );
      } else {
        return <span className="len-limited">{name}:所有</span>;
      }
    } else {
    }
  }

  render () {
    const { name } = this.props;
    return (
      <div className="main-filter">
        <Trigger
          getPopupContainer={undefined && getPopupContainer}
          popupAlign={this.getPopupAlign(this.state)}
          action={['click']}
          popup={
            <BaseSearch
              inputValue={this.state.inputValue}
              handleChange={this.handlePopChange}
              search={this.searchInput}
            />
          }
          popupPlacement={this.state.placement}
          builtinPlacements={builtinPlacements}
          popupTransitionName={this.state.transitionName}
        >
          <BaseFilter inputValue={this.state.inputValue} />
        </Trigger>
      </div>
    );
  }
}
