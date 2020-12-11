/* eslint-disable */
import React, { Component } from "react";
import Resizable from "Components/Resizable";
import { List, Typography, Divider, Layout, Row, Col } from "antd";
import Style from "./style.module.scss";
const { Header, Footer, Sider, Content } = Layout;
export class Home extends Component {
  state = {};
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
    // console.log("keys()", context.keys());
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
    this.setState({ list: list });
  }
  fnGo = (path) => {
    this.props.history.push({ pathname: `/${path}` });
  };
  render() {
    const { list } = this.state;

    return (
      <>
        <Layout>
          <Sider className={Style.sider}>
            <div className={Style.left}>
              <ul>
                <li onClick={() => this.fnGo("")}>首页</li>
                <li onClick={() => this.fnGo("frontend")}>前端</li>
                <li onClick={() => this.fnGo("backend")}>后端</li>
                <li onClick={() => this.fnGo("Notes")}>Notes</li>
              </ul>
            </div>
          </Sider>
          <Content className={Style.content}>
            <ul className={Style.list}>
              {list &&
                list.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() =>
                        this.props.history.push(
                          `/article?path=${escape(item.path)}`
                        )
                      }
                    >
                      {item.title}
                    </li>
                  );
                })}
            </ul>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Home;
