import React, { Component } from "react";
import Main from "./containers/Main";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { ConfigProvider, Radio } from "antd";

import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("en");

class App extends Component {
  constructor() {
    super();
    this.state = {
      locale: enUS,
    };
  }

  changeLocale = (e) => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale("en");
    } else {
      moment.locale("zh-cn");
    }
  };

  render() {
    const { locale } = this.state;
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group value={locale} onChange={this.changeLocale}>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <ConfigProvider locale={locale}>
          <Main
            key={
              locale
                ? locale.locale
                : "en" /* Have to refresh for production environment */
            }
          />
        </ConfigProvider>
      </div>
    );
  }
}

export default App;
