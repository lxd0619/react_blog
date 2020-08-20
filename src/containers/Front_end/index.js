import React, { Component } from "react";

import { Card } from "antd";
import ReactMarkdown from "react-markdown";
import CodeBloack from "../../utils/CodeBloack";
import HeadingBlock from "../../utils/HeadingBlock";
import AppMarkdown from "./test.md";
import Editor from "for-editor";

export class FrontEnd extends Component {
  state = {
    markdown: "",
  };

  componentWillMount() {
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown, value } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <ReactMarkdown
            className="markdown-body"
            source={markdown}
            escapeHtml={false}
            renderers={{
              code: CodeBloack,
              heading: HeadingBlock,
            }}
          />
        </Card>
        <Editor
          preview
          value={value}
          onChange={(value) => {
            this.setState({ value });
          }}
        />
      </div>
    );
  }
}

export default FrontEnd;
