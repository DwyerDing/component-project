import React, { Component } from 'react';
import classNames from 'classnames';
import Dropdown from 'rc-dropdown';
import Tree, { TreeNode } from 'rc-tree';
import BaseFilter from '../filter/base-filter';
import Search from '../search/search';

const Icon = ({ selected }) => (
  <span className={classNames('customize-icon', selected && 'selected-icon')} />
);

export default class TreeFilter extends React.Component {
  constructor (props) {
    super(props);
    this.data = this.props.data;
    this.state = {
      treeData: this.data,
      expandedKeys: []
    };
  }

  searchInput (e) {
    let value = e.target.value;
    if (value) {
      this.state.treeData = this.data.map(item => {
        if (item.name.includes(value)) {
          return item;
        }
      });
    }
  }

  render () {
    const multiple = (
      <div>
        <Search onChange={this.searchInput} />
        <Tree
          defaultExpandAll
          icon={Icon}
          checkable
          onExpand={this.onExpand}
          expandedKeys={this.state.expandedKeys}
          autoExpandParent={this.state.autoExpandParent}
          onCheck={this.onCheck}
          checkedKeys={this.state.checkedKeys}
          onSelect={this.onSelect}
          selectedKeys={this.state.selectedKeys}
        >
          <TreeNode title="Parent">
            <TreeNode title="Child" />
          </TreeNode>
        </Tree>
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
          <BaseFilter />
        </Dropdown>
      </div>
    );
  }
}
