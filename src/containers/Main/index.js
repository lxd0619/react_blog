import React, { Suspense, lazy } from "react";
import {
  // BrowserRouter as Router,
  HashRouter,
  Route,
  NavLink,
  // Redirect,
} from "react-router-dom";
// import { Layout, Breadcrumb, Dropdown, Menu, Switch } from "antd";
import { Menu } from "antd";

// const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./Home"));
const Article = lazy(() =>
  import(/* webpackChunkName: "Article" */ "./Article")
);
const Frontend = lazy(() =>
  import(/* webpackChunkName: "Frontend" */ "./Front_end")
);
const Backend = lazy(() =>
  import(/* webpackChunkName: "Backend" */ "./Back_end")
);
const Edit = lazy(() => import(/* webpackChunkName: "Edit" */ "./Edit"));

class Main extends React.Component {
  state = {};

  render() {
    return (
      <HashRouter>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              // defaultSelectedKeys={["1"]}
            >
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
          </Header>
          <Layout>
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
                <Route path="/article" component={Article} exact />
                <Route path="/frontend" component={Frontend} exact />
                <Route path="/backend" component={Backend} exact />
                <Route path="/edit" component={Edit} exact />
                {/* 刷新跳首页 */}
                <Redirect to="/" />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}

export default Main;
