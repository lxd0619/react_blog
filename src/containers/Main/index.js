import React, { Component } from "react";

// import Front_end from "../Front_end";
// import Back_end from "../Back_end";
// const MainRouter = () => (
//     <HashRouter>
//       <Switch>
//         <Route path="/frontend" component={Front_end} />
//         <Route path="/backend" component={Back_end} />
//         <Redirect to="/frontend" />
//       </Switch>
//     </HashRouter>
//   );

//   export default MainRouter;

import { Menu, Switch, Divider, Button } from "antd";
import {
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Main extends React.Component {
  state = {
    mode: "inline",
    theme: "light",
    collapsed: false,
  };

  changeMode = (value) => {
    this.setState({
      mode: value ? "vertical" : "inline",
    });
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <>
        <Switch onChange={this.changeMode} /> Change Mode
        <Divider type="vertical" />
        <Switch onChange={this.changeTheme} /> Change Style
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <br />
        <br />
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={this.state.mode}
          theme={this.state.theme}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            Navigation Two
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<SettingOutlined />}
            title="Navigation Three"
          >
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
          <Menu.Item key="link" icon={<LinkOutlined />}>
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ant Design
            </a>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Main;
