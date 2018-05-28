import React from 'react';

export default class BaseMultiple extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      chosenList: [],
      choosingList: this.props.data,
      ubuntuList: [],
      centOsList: [],
      otherList: []
    };
  }

  select (item) {
    let selList = this.props.selectedList;
    let chosenList = [];
    let otherList = [];

    selList.forEach(selectedItem => {
      if (item.name !== selectedItem.name) {
        // validate item is in list
        chosenList.push(item);
      } else {
        otherList.push(item);
      }
    });
    this.setState({
      chosenList: chosenList,
      choosingList: otherList
    });

    this.props.selectedList = this.state.chosenList;
    this.props.onSearch(this.props.selectedList);
    // maybe need state to update parent component selectedList status
  }

  clearChosen () {
    this.setState({
      chosenList: [],
      choosingList: this.props.data
    });
    this.props.selectedList = this.state.chosenList;
  }

  mapDataToLi (data) {
    data.length > 0 &&
      data.map((item, index) => {
        return (
          <li
            className="multiple-item"
            key={index}
            //   onSelect={this.saveSelected}
            onClick={this.props.searchSelected}
          >
            {item.name}
          </li>
        );
      });
  }

  listToChose () {
    if (this.props.name === '操作系统') {
      let showData = this.props.data;
      let ubuntuList = [];
      let centOsList = [];
      let otherList = [];
      for (let item of showData) {
        if (item.name.includes('Ubuntu')) {
          ubuntuList.push(item);
        } else if (item.name.includes('CentOS')) {
          centOsList.push(item);
        } else {
          otherList.push(item);
        }
      }
      this.setState({
        ubuntuList: ubuntuList,
        centOsList: centOsList,
        otherList: otherList
      });
      return (
        <ul>
          {this.state.ubuntuList.length > 0 && (
            <li className="multiple-title">
              <span>Ubuntu</span>
            </li>
          )}
          {this.mapDataToLi(this.state.ubuntuList)}
          {this.state.centOsList.length > 0 && (
            <li className="multiple-title">
              <span>CentOS</span>
            </li>
          )}
          {this.mapDataToLi(this.state.ubuntuList)}
          {this.state.otherList.length > 0 && (
            <li className="multiple-title">
              <span>Other</span>
            </li>
          )}
          {this.mapDataToLi(this.state.otherList)}
        </ul>
      );
    } else {
      return (
        <ul className="multiple-group">
          {this.props.titleName && (
            <li className="multiple=title">
              <span>{this.props.titleName}</span>
            </li>
          )}
          {this.state.choosingList.length > 0 &&
            this.state.choosingList.map((item, index) => {
              return (
                <li
                  className="multiple-item"
                  key={index}
                  onSelect={this.saveSelected}
                  onClick={this.props.searchSelected}
                >
                  {item.name}
                </li>
              );
            })}
        </ul>
      );
    }
  }

  render () {
    return (
      <div>
        <ul className="selected-area">
          {this.state.chosenList.length > 0 && (
            <li className="clear-selected" onClick={this.clearChosen()}>
              <span>清除筛选</span>
            </li>
          )}
          {this.mapDataToLi(this.state.chosenList)}
        </ul>
        {this.listToChose()}
      </div>
    );
  }
}
