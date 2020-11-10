/* eslint-disable */
import React, { Component } from "react";
import { Tree } from "antd";
const { DirectoryTree } = Tree;

export class FrontEnd extends Component {
  state = {
    markdown: "",
    treeData: [],
  };

  componentDidMount() {
    this.getFileList();
  }
  getFileList() {
    const context = require.context("@/blogs", true, /\.md$/);
    const arr = context.keys();
    // console.log("context.id", context.id); //匹配结果./js sync recursive \.js$

    //参数分为三段，一、index.js当前路径，二、是否递归，三、正则匹配规则
    //context 关闭递归查找recursive 会变成 sync
    // console.log("arr", context.resolve(arr[0]));
    //第一个js文件的相对路径./js/b.js
    console.log("keys()", context.keys());
    //所有成功匹配的js文件数组["./a.js", "./index.js", "./reducer/c.js", "./reducer/d.js"]
    const res = context.keys().map(context);
    // console.log("res", res);

    let list = [];
    let lists = [];
    context.keys().map((item) => {
      lists.push(item.split(".")[1].slice(1, item.split(".")[1].length));

      list.push({
        title: item.split(".")[1].split("/").slice(-1)[0],
        path: context(item),
      });
    });
    this.setState({ list: list, treeData: this.listToTree(lists) });
  }

  listToTree(arr) {
    var tree = [];
    if (Array.isArray(arr)) {
      for (var i = 0; i < arr.length; ++i) {
        var path = arr[i].split("/");
        var _ret = tree;
        for (var j = 0; j < path.length; ++j) {
          var title = path[j];
          var obj = null;
          for (var k = 0; k < _ret.length; ++k) {
            var _obj = _ret[k];
            if (_obj.title === title) {
              obj = _obj;
              break;
            }
          }
          if (!obj) {
            obj = { title: title, key: title };
            if (title.indexOf(".") < 0) obj.children = [];
            _ret.push(obj);
          }
          if (obj.children) _ret = obj.children;
        }
      }
    }
    return tree;
  }

  onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
    const { list } = this.state;
    list.map((item) => {
      item.title == keys[0] &&
        this.props.history.push({
          pathname: "/article",
          query: { path: item.path },
        });
    });
  };

  onExpand = () => {
    console.log("Trigger Expand");
  };

  render() {
    const { list, treeData } = this.state;

    return (
      <div>
        <Tree
          defaultExpandAll={true}
          onSelect={this.onSelect}
          onExpand={this.onExpand}
          treeData={treeData}
        />
      </div>
    );
  }
}

export default FrontEnd;
