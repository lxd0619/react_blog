import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Home from "../Home";
import Frontend from "../Front_end";
import Backend from "../Back_end";
import Edit from "../Edit";
import { Layout, Breadcrumb, Dropdown, Menu, Switch } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

class AppRouter extends React.Component {
  state = {};

  render() {
    const menu = (
      <Router>
        <Menu>
          <Item key="1">
            <span
              to="/backend"
              onClick={() => {
                this.refs.home.click();
              }}
            >
              首页
            </span>
          </Item>
          <Item key="2">
            <span
              onClick={() => {
                this.refs.frd.click();
              }}
            >
              前端
            </span>
          </Item>
          <Item key="3">
            <span
              onClick={() => {
                this.refs.bcd.click();
              }}
            >
              后端
            </span>
          </Item>
          <Item key="4">
            <span
              onClick={() => {
                this.refs.edit.click();
              }}
            >
              编辑
            </span>
          </Item>
        </Menu>
      </Router>
    );
    return (
      <HashRouter>
        {/* <Dropdown overlay={menu} trigger={["contextMenu"]}> */}
        {/* <Layout> */}
        {/* <Header className="header"> */}
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Item key="1">
            <NavLink to="/" ref="home">
              首页
            </NavLink>
          </Item>
          <Item key="2">
            <NavLink to="/frontend" ref="frd">
              前端
            </NavLink>
          </Item>
          <Item key="3">
            <NavLink to="/backend" ref="bcd">
              后端
            </NavLink>
          </Item>
          <Item key="4">
            <NavLink to="/edit" ref="edit">
              编辑
            </NavLink>
          </Item>
        </Menu>
        {/* </Header> */}
        {/* <Layout> */}
        {/* <Layout style={{ padding: "0 24px 24px" }}> */}
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 500,
                  }}
                > */}
        <Route path="/" component={Home} exact />
        <Route path="/frontend" component={Frontend} exact />
        <Route path="/backend" component={Backend} exact />
        <Route path="/edit" component={Edit} exact />
        <Redirect to="/" />
        {/* </Content> */}
        {/* </Layout> */}
        {/* </Layout> */}
        {/* </Layout> */}
        {/* </Dropdown> */}
      </HashRouter>
    );
  }
}

export default AppRouter;
