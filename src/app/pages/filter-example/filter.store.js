import { observable } from 'mobx';

class FilterStore {
  @observable multipleData;
  @observable treeData;
  constructor (props) {
    this.multipleData = [
      {
        id: '张楠111',
        name: '张楠111'
      },
      {
        id: 'meigen',
        name: 'meigen'
      },
      {
        id: '555',
        name: '555'
      },
      {
        id: '111',
        name: '111'
      },
      {
        id: '青藤',
        name: '青藤'
      },
      {
        id: null,
        name: 'null'
      },
      {
        id: 'xin.hu ',
        name: 'xin.hu '
      },
      {
        id: '11111',
        name: '11111'
      }
    ];
    this.groupData = [
      {
        id: {
          id: 1,
          parentId: 0,
          allowed: true
        },
        name: '未分组主机（Linux）'
      },
      {
        id: {
          id: 4,
          parentId: 0,
          allowed: true
        },
        name: 'zhangrui'
      },
      {
        id: {
          id: 5,
          parentId: 0,
          allowed: true
        },
        name: 'zhangrui'
      },
      {
        id: {
          id: 6,
          parentId: 4,
          allowed: true
        },
        name: 'zi'
      },
      {
        id: {
          id: 7,
          parentId: 4,
          allowed: true
        },
        name: 'group2'
      },
      {
        id: {
          id: 8,
          parentId: 0,
          allowed: true
        },
        name: 'group3'
      },
      {
        id: {
          id: 13,
          parentId: 0,
          allowed: true
        },
        name: '&_test'
      },
      {
        id: {
          id: 14,
          parentId: 7,
          allowed: true
        },
        name: 'rui-2-2'
      },
      {
        id: {
          id: 16,
          parentId: 4,
          allowed: true
        },
        name: 'abc_0'
      },
      {
        id: {
          id: 19,
          parentId: 0,
          allowed: true
        },
        name: 'tianxianhu'
      },
      {
        id: {
          id: 20,
          parentId: 8,
          allowed: true
        },
        name: 'group3-level2'
      },
      {
        id: {
          id: 21,
          parentId: 20,
          allowed: true
        },
        name: 'group3-level-3'
      },
      {
        id: {
          id: 22,
          parentId: 21,
          allowed: true
        },
        name: 'group-level-4'
      },
      {
        id: {
          id: 23,
          parentId: 21,
          allowed: true
        },
        name: 'group3-level-4-2'
      },
      {
        id: {
          id: 24,
          parentId: 21,
          allowed: true
        },
        name: 'group3-level-4-3'
      },
      {
        id: {
          id: 25,
          parentId: 21,
          allowed: true
        },
        name: 'group3-level-4-4'
      },
      {
        id: {
          id: 34,
          parentId: 0,
          allowed: true
        },
        name: 'test_2'
      },
      {
        id: {
          id: 35,
          parentId: 19,
          allowed: true
        },
        name: 'tt'
      },
      {
        id: {
          id: 37,
          parentId: 34,
          allowed: true
        },
        name: 'test'
      },
      {
        id: {
          id: 39,
          parentId: 0,
          allowed: true
        },
        name: 'namei'
      },
      {
        id: {
          id: 41,
          parentId: 0,
          allowed: true
        },
        name: 'heyanyan'
      },
      {
        id: {
          id: 42,
          parentId: 0,
          allowed: true
        },
        name: 'docker - 忠阳'
      },
      {
        id: {
          id: 44,
          parentId: 0,
          allowed: true
        },
        name: 'bingxian.wu'
      },
      {
        id: {
          id: 65,
          parentId: 4,
          allowed: true
        },
        name: '222'
      }
    ];
    this.formatData(this.groupData);
  }

  formatData (data) {
    let formattedData = [];
    let i = 1;
    data.array.forEach(item => {
      formattedData.push({ key: item.id.id, pId: item.id.Pid });
    });

    this.treeData = [
      {
        title: 'edit',
        key: '0-0-0',
        level: 1,
        child: [
          {
            title: '子节点1',
            key: '0-0-0-0',
            level: 2,
            child: [{ title: '子子节点1', key: '0-0-0-0-1', level: 3 }]
          },
          { title: '子节点2', key: '0-0-0-1', level: 2 }
        ]
      },
      {
        title: '父节点',
        key: '0-0-1',
        level: 1,
        child: [
          { title: '子节点1', key: '0-0-1-0', level: 2 },
          { title: '子节点2', key: '0-0-1-1', level: 2 }
        ]
      }
    ];
  }

  multipleSearch (input) {}
}

export default FilterStore;
