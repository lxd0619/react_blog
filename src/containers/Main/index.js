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
import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class AppRouter extends React.Component {
  state = {};

  render() {
    const menu = (
      <Router>
        <Menu>
          <Menu.Item key="1">
            <span
              to="/backend"
              onClick={() => {
                this.refs.home.click();
              }}
            >
              首页
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <span
              onClick={() => {
                this.refs.frd.click();
              }}
            >
              前端
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <span
              to="/backend"
              onClick={() => {
                this.refs.bcd.click();
              }}
            >
              后端
            </span>
          </Menu.Item>
        </Menu>
      </Router>
    );
    return (
      <HashRouter>
        <Dropdown overlay={menu} trigger={["contextMenu"]}>
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <NavLink to="/" ref="home">
                    首页
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/frontend" ref="frd">
                    前端
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <NavLink to="/backend" ref="bcd">
                    后端
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                width={200}
                className="site-layout-background"
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<LaptopOutlined />}
                    title="subnav 2"
                  >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    icon={<NotificationOutlined />}
                    title="subnav 3"
                  >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
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
                >
                  <Route path="/" component={Home} exact />
                  <Route path="/frontend" component={Frontend} exact />
                  <Route path="/backend" component={Backend} exact />
                  <Redirect to="/" />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Dropdown>
      </HashRouter>
    );
  }
}

export default AppRouter;
