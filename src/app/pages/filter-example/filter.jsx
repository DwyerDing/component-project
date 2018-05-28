import React from 'react';
import { observer } from 'mobx-react';
import { Search, MultipleFilter, TreeFilter } from '@component';
import FilterStore from './filter.store';

@observer
export default class FilterPage extends React.component {
  constructor (props) {
    super(props);
    this.store = new FilterStore();
  }

  search (input) {
    this.store.search(input);
  }

  multipleChange (selected) {
    this.store.multipleSearch(selected);
  }

  render () {
    return (
      <div>
        <p> Filter</p>
        <Search name="主机名" onSearch={this.search()} />
        <MultipleFilter
          name="操作系统"
          data={this.store.multipleData}
          onSearch={this.multipleChange()}
        />
        <TreeFilter data={this.store.treeData} />
      </div>
    );
  }
}
