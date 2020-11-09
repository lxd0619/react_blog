/* eslint-disable */
import React, { Component } from "react";

export class FrontEnd extends Component {
  state = {
    markdown: "",
  };

  componentDidMount() {
    const context = require.context("@/blogs", true, /\.md$/);
    const arr = context.keys();
    console.log(context.id);
    //匹配结果./js sync recursive \.js$
    //参数分为三段，一、index.js当前路径，二、是否递归，三、正则匹配规则
    //context 关闭递归查找recursive 会变成 sync
    console.log("arr", context.resolve(arr[0]));
    //第一个js文件的相对路径./js/b.js
    console.log("keys()", context.keys());
    //所有成功匹配的js文件数组["./a.js", "./index.js", "./reducer/c.js", "./reducer/d.js"]
    const res = context.keys().map(context);
    console.log("res", res);

    let list = [];
    let lists = [];
    context.keys().map((item) => {
      // console.log("item", item);
      console.log("item", item.split(".")[1].split("/"));

      let arr = item.split(".")[1].split("/");
      lists.push({ ...arr.slice(1, arr.length) });

      list.push({
        title: item.split(".")[1].split("/").slice(-1),
        path: context(item),
      });
    });
    console.log(lists);
    this.setState({ data: list });
  }

  loop = (data) => {
    data &&
      data.map((item, index) => {
        console.log(Object.keys(item), index);
      });
    // return list;
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <ul>
          {data &&
            data.map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    this.props.history.push({
                      pathname: "/article",
                      query: { path: item.path },
                    });
                  }}
                >
                  {item.title}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default FrontEnd;
