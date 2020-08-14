import React, { Component } from "react";
// import ReactMarkdown from "react-markdown";
// // import ReactMarkdown from "react-markdown/with-html";
// import CodeBlock from "../../utils/CodeBloack";
// import testMd from "../../static/test.md";

import { Card, Form } from "antd";
import ReactMarkdown from "react-markdown";
import codeBlock from "./CodeBlock";
import AppMarkdown from "./test.md";
// import "github-markdown-css";

export class Home extends Component {
  state = {
    markdown: "",
  };

  componentWillMount() {
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;

    return (
      <div>
        <Card bordered={false}>
          <ReactMarkdown
            className="markdown-body"
            source={markdown}
            escapeHtml={false}
            renderers={{
              code: codeBlock,
            }}
          />
        </Card>
      </div>
    );
  }
}

export default Home;
