import React, { Component } from "react";
import Article from "Components/Article";

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
// const res = context.keys().map(context);
const res = context.keys().map((item) => context(item));
//上面两种写法等同
console.log("res", res);

export class FrontEnd extends Component {
  state = {
    markdown: "",
  };

  componentWillMount() {}

  render() {
    const {} = this.state;
    return (
      <div>
        {res.map((item, i) => {
          return <Article key={i} md={item} />;
        })}
      </div>
    );
  }
}

export default FrontEnd;
